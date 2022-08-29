import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { GetReservoir } from '../models/GetReservoir.model';
import { GetAdditionalData, ReservoirRealTimeInfos } from '../models/GetAdditionalData.model';
import { RESERVOIR_AREA_BY_ID } from '../constant/reservoir/reservoir-area-by-id.constant';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ReservoirService {
  reservoirList: GetReservoir[] = [];
  reservoirBehaviorSubject$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) {}

  getReservoirDetail(): Observable<GetReservoir[]> {
    return this.http.get<GetReservoir[]>(`${environment.detailApiUrl}`);
  }

  onReservoirData(): Observable<any> {
    return this.reservoirBehaviorSubject$.asObservable();
  }

  /**
   * 回傳可以用的 property:
   * AccumulatedRainfall -> 昨日累積雨量[單位為毫米]
   */
  getReservoirAdditionalData(): Observable<GetAdditionalData[]> {
    return this.http.get<GetAdditionalData[]>(environment.additionalApiUrl);
  }

  setReservoirList(data: any): void {
    this.reservoirList = data;
  }

  sendReservoirData(): void {
    this.reservoirBehaviorSubject$.next(this.reservoirList);
  }

  cleanAndStoreReservoirData(rawData: GetReservoir[], additionalData: ReservoirRealTimeInfos[]): void {
    const cleanedData = Object.values(rawData)
      .filter(item => typeof item === 'object')
      .map(item => {
        const accumulatedRainfall: number =
          additionalData.find(additionalItem => additionalItem.StationName['zh_TW'] === item.name)
            ?.AccumulatedRainfall ?? 0;
        const [date, tempTime]: string[] = item.updateAt.split('(');
        const formattedTime: string = tempTime.replace('時)', ':00');
        const [idNum]: number[] = item.id.match(/\d+/g)!.map(num => +num);
        let area: string = '';
        for (const item of RESERVOIR_AREA_BY_ID) {
          if (item.idList.includes(idNum)) {
            area = item.area;
            break;
          }
        }

        return {
          ...item,
          percentage: [+item.percentage, +item.percentage],
          area,
          pureTime: `${date} ${formattedTime}`,
          accumulatedRainfall,
        };
      });

    this.setReservoirList(cleanedData);
    this.sessionStorageService.setSessionStorage({ key: 'reservoir', value: cleanedData });
    this.sendReservoirData();
  }

  getReservoirItemById(reservoirId: string): GetReservoir | undefined {
    return this.reservoirList.find(item => item.id === reservoirId);
  }
}
