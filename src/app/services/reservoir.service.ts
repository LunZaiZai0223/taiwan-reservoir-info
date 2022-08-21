import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { GetReservoir } from '../models/GetReservoir.model';

@Injectable({
  providedIn: 'root',
})
export class ReservoirService {
  reservoirList: GetReservoir[] = [];

  reservoirBehaviorSubject$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  getReservoirDetail(): Observable<GetReservoir[]> {
    return this.http.get<GetReservoir[]>(`${environment.detailApiUrl}`);
  }

  onReservoirData(): Observable<any> {
    return this.reservoirBehaviorSubject$.asObservable();
  }

  setReservoirList(data: any): void {
    this.reservoirList = data;
    console.log(this.reservoirList);
  }

  sendReservoirData(): void {
    this.reservoirBehaviorSubject$.next(this.reservoirList);
  }
}

/*
 * API 回傳資料格式:
 * baseAvailable: 有效容量
 * daliyInflow: 今日進水量
 * daliyNetflow: 53.56999999999999
 * daliyOverflow: 今日出水量
 * id: "reservoir2"
 * name: "石門水庫"
 * percentage: 水庫當前蓄水百分比
 * updateAt: "2022-08-19(13時)"
 * volumn: 有效蓄水量（萬立方公尺）
 *
 * */

const data = {
  // 北部
  寶山第二水庫: {
    baseAvailable: '3147.18',
    id: 'reservoir4',
    updateAt: '2022-08-21(12時)',
    volumn: '3151.23',
    percentage: 100,
    daliyOverflow: '22.99',
    daliyInflow: '23.14',
    daliyNetflow: -0.15000000000000213,
    name: '寶山第二水庫',
    area: 'north',
  },
  // 中部
  日月潭水庫: {
    baseAvailable: '12964.03',
    id: 'reservoir9',
    updateAt: '2022-08-21(7時)',
    volumn: '11930.86',
    percentage: 92,
    daliyOverflow: '121.74',
    daliyInflow: '69.64',
    daliyNetflow: 52.099999999999994,
    name: '日月潭水庫',
    area: 'middle',
  },
  // 南部
  南化水庫: {
    baseAvailable: '8935.10',
    id: 'reservoir16',
    updateAt: '2022-08-21(7時)',
    volumn: '8880.09',
    percentage: 99.3,
    daliyOverflow: '119.50',
    daliyInflow: '89.50',
    daliyNetflow: 30,
    name: '南化水庫',
    area: 'south',
  },
  // 北部
  翡翠水庫: {
    baseAvailable: '33550.50',
    id: 'reservoir1',
    updateAt: '2022-08-21(11時)',
    volumn: '21588.51',
    percentage: 64.3,
    daliyOverflow: '264.30',
    daliyInflow: '48.20',
    daliyNetflow: 216.10000000000002,
    name: '翡翠水庫',
    area: 'north',
  },
  // 中部
  湖山水庫: {
    name: '湖山水庫',
    id: 'reservoir19',
    updateAt: '2022-08-21(12時)',
    volumn: '5105.13',
    percentage: 100,
    daliyOverflow: '53.66',
    daliyInflow: '47.09',
    daliyNetflow: 6.569999999999993,
    baseAvailable: '5086.51',
    area: 'middle',
  },
  // 北部
  德基水庫: {
    baseAvailable: '18642.00',
    id: 'reservoir7',
    updateAt: '2022-08-21(7時)',
    volumn: '16417.67',
    percentage: 88,
    daliyOverflow: '52.14',
    daliyInflow: '79.07',
    daliyNetflow: -26.929999999999993,
    name: '德基水庫',
    area: 'north',
  },
  // 南部
  烏山頭水庫: {
    baseAvailable: '7911.40',
    id: 'reservoir15',
    updateAt: '2022-08-21(7時)',
    volumn: '5744.00',
    percentage: 72.6,
    daliyOverflow: '50.10',
    daliyInflow: '41.10',
    daliyNetflow: 9,
    name: '烏山頭水庫',
    area: 'south',
  },
  // 北部
  石門水庫: {
    baseAvailable: '20526.01',
    id: 'reservoir2',
    updateAt: '2022-08-21(11時)',
    volumn: '15894.07',
    percentage: 77.4,
    daliyOverflow: '66.18',
    daliyInflow: '81.73',
    daliyNetflow: -15.549999999999997,
    name: '石門水庫',
    area: 'north',
  },
  // 南部
  蘭潭水庫: {
    baseAvailable: '923.97',
    id: 'reservoir21',
    updateAt: '2022-08-21(7時)',
    volumn: '898.17',
    percentage: 97.2,
    daliyOverflow: '12.13',
    daliyInflow: '5.90',
    daliyNetflow: 6.23,
    name: '蘭潭水庫',
    area: 'south',
  },
  // 中部
  霧社水庫: {
    baseAvailable: '3682.50',
    id: 'reservoir10',
    updateAt: '2022-08-21(7時)',
    volumn: '1754.52',
    percentage: 47.6,
    daliyOverflow: '48.82',
    daliyInflow: '30.37',
    daliyNetflow: 18.45,
    name: '霧社水庫',
    area: 'middle',
  },
  // 南部
  曾文水庫: {
    baseAvailable: '50956.00',
    id: 'reservoir14',
    updateAt: '2022-08-21(11時)',
    volumn: '25314.00',
    percentage: 49.6,
    daliyOverflow: '0.00',
    daliyInflow: '333.00',
    daliyNetflow: -333,
    name: '曾文水庫',
    area: 'south',
  },
  // 南部
  白河水庫: {
    baseAvailable: '1307.10',
    id: 'reservoir13',
    updateAt: '2022-08-21(8時)',
    volumn: '1121.00',
    percentage: 85.7,
    daliyOverflow: '0.00',
    daliyInflow: '0.00',
    daliyNetflow: 0,
    name: '白河水庫',
    area: 'south',
  },
  // 北部
  新山水庫: {
    baseAvailable: '1002.00',
    id: 'reservoir0',
    updateAt: '2022-08-19(8時)',
    volumn: '473.56',
    percentage: 47.2,
    daliyOverflow: '--',
    daliyInflow: '--',
    daliyNetflow: '--',
    name: '新山水庫',
    area: 'north',
  },
  // 南部
  仁義潭水庫: {
    baseAvailable: '2484.46',
    id: 'reservoir12',
    updateAt: '2022-08-21(7時)',
    volumn: '2438.49',
    percentage: 98.1,
    daliyOverflow: '19.88',
    daliyInflow: '19.88',
    daliyNetflow: 0,
    name: '仁義潭水庫',
    area: 'south',
  },
  // 北部
  寶山水庫: {
    baseAvailable: '503.50',
    id: 'reservoir20',
    updateAt: '2022-08-21(7時)',
    volumn: '488.97',
    percentage: 97.1,
    daliyOverflow: '8.14',
    daliyInflow: '7.56',
    daliyNetflow: 0.580000000000001,
    name: '寶山水庫',
    area: 'north',
  },
  // 中部
  永和山水庫: {
    baseAvailable: '2998.94',
    id: 'reservoir3',
    updateAt: '2022-08-21(11時)',
    volumn: '2932.29',
    percentage: 97.77754806698367,
    daliyOverflow: '--',
    daliyInflow: '--',
    daliyNetflow: '--',
    name: '永和山水庫',
    area: 'middle',
  },
  // 南部
  阿公店水庫: {
    baseAvailable: '1525.89',
    id: 'reservoir17',
    updateAt: '2022-08-21(11時)',
    volumn: '99.00',
    percentage: 6.49,
    daliyOverflow: '3.02',
    daliyInflow: '7.68',
    daliyNetflow: -4.66,
    name: '阿公店水庫',
    area: 'south',
  },
  // 中部
  明德水庫: {
    baseAvailable: '1245.26',
    id: 'reservoir5',
    updateAt: '2022-08-21(7時)',
    volumn: '931.26',
    percentage: 74.7843823779773,
    daliyOverflow: '--',
    daliyInflow: '--',
    daliyNetflow: '--',
    name: '明德水庫',
    area: 'middle',
  },
  // 中部
  鯉魚潭水庫: {
    baseAvailable: '11583.69',
    id: 'reservoir6',
    updateAt: '2022-08-21(11時)',
    volumn: '11341.70',
    percentage: 97.9,
    daliyOverflow: '86.48',
    daliyInflow: '60.65',
    daliyNetflow: 25.830000000000005,
    name: '鯉魚潭水庫',
    area: 'middle',
  },
  // 中部
  石岡壩: {
    baseAvailable: '160.54',
    id: 'reservoir8',
    updateAt: '2022-08-21(11時)',
    volumn: '107.08',
    percentage: 66.7,
    daliyOverflow: '225.30',
    daliyInflow: '238.70',
    daliyNetflow: -13.399999999999977,
    name: '石岡壩',
    area: 'middle',
  },
  // 南部
  牡丹水庫: {
    baseAvailable: '2652.17',
    id: 'reservoir18',
    updateAt: '2022-08-21(11時)',
    volumn: '1449.00',
    percentage: 54.6,
    daliyOverflow: '9.94',
    daliyInflow: '20.00',
    daliyNetflow: -10.06,
    name: '牡丹水庫',
    area: 'south',
  },
  result: '成功',
  version: '1.1.0',
};
