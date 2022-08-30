import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservoirDetail } from 'src/app/models/ReservoirDetail.model';
import { RESERVOIR_DESCRIPTION_LIST } from 'src/app/constant/reservoir/reservoir-description-list';
import { RESERVOIR_TW_EN_NAME_LIST } from 'src/app/constant/reservoir/reservoir-tw-en-name-list';
import { Subscription } from 'rxjs';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reservoir-description',
  templateUrl: './reservoir-description.component.html',
  styleUrls: ['./reservoir-description.component.scss'],
})
export class ReservoirDescriptionComponent implements OnInit, OnDestroy {
  @Input() reservoirName: string | undefined = '';
  @ViewChild('skeletonWrapper', { static: true }) skeletonWrapperEle!: ElementRef<HTMLElement>;

  isSkeletonActive: boolean = true;
  reservoirDetail: ReservoirDetail = {} as ReservoirDetail;
  currentLang: string = '';
  reservoirViewName: string = '';
  subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang;
    this.reservoirDetail = RESERVOIR_DESCRIPTION_LIST.find(
      item => item.id === this.route.snapshot.params['reservoirId']
    )!;

    if (this.reservoirName) {
      this.reservoirViewName =
        this.currentLang === 'zh-tw' ? this.reservoirName : RESERVOIR_TW_EN_NAME_LIST[this.reservoirName];
    }

    this.subscription = this.translate.onLangChange.subscribe((langEvent: LangChangeEvent) => {
      this.currentLang = langEvent.lang;
      if (this.currentLang === 'zh-tw') {
        this.reservoirViewName = this.reservoirName ?? '';
      } else {
        if (this.reservoirName) {
          this.reservoirViewName = RESERVOIR_TW_EN_NAME_LIST[this.reservoirName];
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onPageIsLoaded(): void {
    this.renderer.removeClass(this.skeletonWrapperEle.nativeElement, 'skeleton');
    this.isSkeletonActive = false;
  }
}
