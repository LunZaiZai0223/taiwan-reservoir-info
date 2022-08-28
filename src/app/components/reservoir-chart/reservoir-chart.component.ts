import { Component, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { ChartComponent } from 'ng-apexcharts';

import { reservoirAreaChartConfig } from '../reservoir-area-chart-config';
import { ReservoirAreaChartModel } from '../../models/reservoir-area-chart-model';
import { RESERVOIR_TW_EN_NAME_LIST } from '../../constant/reservoir/reservoir-tw-en-name-list';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reservoir-chart',
  templateUrl: './reservoir-chart.component.html',
  styleUrls: ['./reservoir-chart.component.scss'],
})
export class ReservoirChartComponent implements OnChanges, OnInit, OnDestroy {
  @ViewChild('chart', { static: true }) chart!: ChartComponent;

  /** 要顯示的資料，最少要兩個 elements */
  @Input() chartData: any[] = [];

  /** 水庫的名字 */
  @Input() reservoirName: string = '';

  /** 更新時間 yyyy-mm-dd hh:ss */
  @Input() reservoirUpdateTime: string = '';

  /** 水庫 id */
  @Input() reservoirId: string = '';

  @HostBinding('class') classes = 'chart';

  /**
   * > 70%: #008FFB
   * > 40%: #00E396
   * < 30%: #FF4560
   */
  color: string = '';
  chartOptions: Partial<ReservoirAreaChartModel> = {};
  reservoirViewName: string = '';
  subscription: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setChartColor(changes['chartData'].currentValue);
  }

  ngOnInit(): void {
    if (this.translate.currentLang === 'en') {
      this.setReservoirViewName(RESERVOIR_TW_EN_NAME_LIST[this.reservoirName]);
    } else {
      this.setReservoirViewName(this.reservoirName);
    }

    this.subscription = this.translate.onLangChange.subscribe((langEvent: LangChangeEvent) => {
      if (langEvent.lang === 'en') {
        this.setReservoirViewName(RESERVOIR_TW_EN_NAME_LIST[this.reservoirName]);
      } else {
        this.setReservoirViewName(this.reservoirName);
      }
    });

    this.setChart();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setChart(): void {
    this.chartOptions = { ...reservoirAreaChartConfig, series: [{ data: this.chartData }], colors: [this.color] };
  }

  private setChartColor(chartData: any[]): void {
    if (chartData[0] >= 70) {
      this.color = '#008FFB';
    } else if (chartData[0] >= 40) {
      this.color = '#00E396';
    } else {
      this.color = '#FF4560';
    }
  }

  private setReservoirViewName(name: string): void {
    // 判斷當前語系決定水庫是中文（單純接 input）還是英文（用 input 拉英文）
    this.reservoirViewName = name;
  }
}
