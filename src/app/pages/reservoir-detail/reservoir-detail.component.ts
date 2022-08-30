import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription, tap } from 'rxjs';
import { GetReservoir } from 'src/app/models/GetReservoir.model';
import { ReservoirService } from 'src/app/services/reservoir.service';
import { RESERVOIR_TW_EN_NAME_LIST } from '../../constant/reservoir/reservoir-tw-en-name-list';

@Component({
  selector: 'app-reservoir-detail',
  templateUrl: './reservoir-detail.component.html',
  styleUrls: ['./reservoir-detail.component.scss'],
})
export class ReservoirDetailComponent implements OnInit, OnDestroy {
  canShow: boolean = false;
  canShowNotFound: boolean = false;
  reservoirDetail: GetReservoir = {} as GetReservoir;
  currentLang: string = '';
  subscription: Subscription = new Subscription();
  langSubscription: Subscription = new Subscription();

  constructor(
    private reservoirService: ReservoirService,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang;
    this.subscription = this.reservoirService
      .onReservoirData()
      .pipe(
        tap((data: any) => {
          // 避免 BehaviorSubject 的初始值 null
          if (data) {
            this.reservoirDetail =
              // 如果找不到就洗成 {}
              this.reservoirService.getReservoirItemById(this.route.snapshot.params['reservoirId']) ??
              ({} as GetReservoir);
            // 因為資料都是從 layout 打完取得的，然後再從 id 拉到正確的資料，防止錯誤的 id
            // 造成拉不到資料爆炸
            if (Object.keys(this.reservoirDetail).length !== 0) {
              this.reservoirDetail.nameEn = RESERVOIR_TW_EN_NAME_LIST[this.reservoirDetail.name];
              this.canShow = true;
            } else {
              this.canShowNotFound = true;
            }
          }
        })
      )
      .subscribe();

    this.langSubscription = this.translate.onLangChange.subscribe((langEvent: LangChangeEvent) => {
      this.currentLang = langEvent.lang;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.langSubscription.unsubscribe();
  }
}
