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
            this.reservoirDetail = this.reservoirService.getReservoirItemById(
              this.route.snapshot.params['reservoirId']
            )!;
            this.reservoirDetail.nameEn = RESERVOIR_TW_EN_NAME_LIST[this.reservoirDetail.name];
            if (this.reservoirDetail) {
              this.canShow = true;
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
