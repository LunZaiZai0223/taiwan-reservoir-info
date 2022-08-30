import { Component, OnInit } from '@angular/core';

import { ReservoirRealTimeInfos } from '../models/GetAdditionalData.model';
import { ReservoirService } from '../services/reservoir.service';
import { SessionStorageService } from '../services/session-storage.service';

import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isOverlayActive: boolean = true;

  constructor(
    private reservoirService: ReservoirService,
    private sessionStorageService: SessionStorageService,
  ) {}

  ngOnInit(): void {
    console.log('in layout');
    // this.setDefaultLang();
    const reservoirDataInSessionStorage: string | null = this.checkReservoirDataIsInSessionStorage();
    if (reservoirDataInSessionStorage) {
      this.reservoirService.setReservoirList(JSON.parse(reservoirDataInSessionStorage));
      this.reservoirService.sendReservoirData();
      this.isOverlayActive = false;
    } else {
      this.processFetchReservoirProcess();
    }
  }

  private processFetchReservoirProcess(): void {
    forkJoin([
      this.reservoirService.getReservoirDetail(),
      this.reservoirService.getReservoirAdditionalData(),
    ]).subscribe(([detail, additional]) => {
      const additionalInfos = ([] as ReservoirRealTimeInfos[]).concat(
        ...additional.map(item => item.ReservoirRealTimeInfos)
      );
      this.reservoirService.cleanAndStoreReservoirData(detail, additionalInfos);
      this.isOverlayActive = false;
    });
  }

  private checkReservoirDataIsInSessionStorage(): string | null {
    return this.sessionStorageService.getSessionStorage('reservoir');
  }
}
