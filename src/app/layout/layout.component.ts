import { Component, HostBinding, OnInit } from '@angular/core';
import { ReservoirService } from '../services/reservoir.service';
import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @HostBinding('class') class = 'bg-dark';

  constructor(private reservoirService: ReservoirService, private sessionStorageService: SessionStorageService) {}

  ngOnInit(): void {
    console.log('in layout');
    const reservoirDataInSessionStorage: string | null = this.checkReservoirDataIsInSessionStorage();
    if (reservoirDataInSessionStorage) {
      this.reservoirService.setReservoirList(JSON.parse(reservoirDataInSessionStorage));
      this.reservoirService.sendReservoirData();
    } else {
      this.processFetchReservoirProcess();
    }
  }

  private processFetchReservoirProcess(): void {
    this.reservoirService.getReservoirDetail().subscribe(response => {
      this.reservoirService.cleanAndStoreReservoirData(response);
    });
  }

  private checkReservoirDataIsInSessionStorage(): string | null {
    return this.sessionStorageService.getSessionStorage('reservoir');
  }
}
