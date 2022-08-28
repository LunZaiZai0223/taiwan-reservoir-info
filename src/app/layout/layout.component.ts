import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ReservoirService } from '../services/reservoir.service';
import { SessionStorageService } from '../services/session-storage.service';

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
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.setDefaultLang();
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
    this.reservoirService.getReservoirDetail().subscribe(response => {
      this.reservoirService.cleanAndStoreReservoirData(response);
      this.isOverlayActive = false;
    });
  }

  private checkReservoirDataIsInSessionStorage(): string | null {
    return this.sessionStorageService.getSessionStorage('reservoir');
  }

  private setDefaultLang(): void {
    // 取得使用者瀏覽器的語言設定
    const browserLang: string = window.navigator.language.toLowerCase();
    if (browserLang.includes('zh')) {
      this.translate.use('zh-tw');
    } else {
      this.translate.use('en');
    }
  }
}
