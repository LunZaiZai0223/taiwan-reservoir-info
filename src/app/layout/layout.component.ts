import { Component, HostBinding, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ReservoirService } from '../services/reservoir.service';
import { SessionStorageService } from '../services/session-storage.service';
import { RESERVOIR_AREA_BY_ID } from '../../app/constant/reservoir/reservoir-area-by-id.constant';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @HostBinding('class') class = 'bg-dark';

  constructor(private reservoirService: ReservoirService, private sessionStorageService: SessionStorageService) {}

  ngOnInit(): void {
    const reservoirDataInSessionStorage: string | null = this.checkReservoirDataIsInSessionStorage();
    if (reservoirDataInSessionStorage) {
      this.reservoirService.setReservoirList(JSON.parse(reservoirDataInSessionStorage));
      this.reservoirService.sendReservoirData();
    } else {
      this.processFetchReservoirProcess();
    }
  }

  private processFetchReservoirProcess(): void {
    this.reservoirService
      .getReservoirDetail()
      .pipe(
        map(response => {
          return Object.values(response)
            .filter(item => typeof item === 'object')
            .map(item => {
              const [idNum]: number[] = item.id.match(/\d+/g)!.map(num => +num);
              let area: string = '';
              for (const item of RESERVOIR_AREA_BY_ID) {
                if (item.idList.includes(idNum)) {
                  area = item.area;
                  break;
                }
              }

              return { ...item, percentage: [+item.percentage, +item.percentage], area };
            });
        })
      )
      .subscribe(result => {
        console.log(result);
        this.reservoirService.setReservoirList(result);
        this.reservoirService.sendReservoirData();
        this.sessionStorageService.setSessionStorage({ key: 'reservoir', value: result });
      });
  }

  private checkReservoirDataIsInSessionStorage(): string | null {
    return this.sessionStorageService.getSessionStorage('reservoir');
  }
}
