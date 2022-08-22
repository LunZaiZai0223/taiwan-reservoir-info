import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { ChartComponent } from 'ng-apexcharts';

import { reservoirAreaChartConfig } from '../reservoir-area-chart-config';
import { ReservoirAreaChartModel } from '../../models/reservoir-area-chart-model';

@Component({
  selector: 'app-reservoir-chart',
  templateUrl: './reservoir-chart.component.html',
  styleUrls: ['./reservoir-chart.component.scss'],
})
export class ReservoirChartComponent implements OnChanges, OnInit {
  @ViewChild('chart', { static: true }) chart!: ChartComponent;

  /** 要顯示的資料，最少要兩個 elements */
  @Input() chartData: any[] = [];

  /** 水庫的名字 */
  @Input() reservoirName: string = '';

  /** 更新時間 yyyy-mm-dd hh:ss */
  @Input() reservoirUpdateTime: string = '';

  @HostBinding('class') classes = 'chart';

  /**
   * > 70%: #008FFB
   * > 40%: #00E396
   * < 30%: #FF4560
   */
  color: string = '';

  chartOptions: Partial<ReservoirAreaChartModel> = {};

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setChartColor(changes['chartData'].currentValue);
  }

  ngOnInit(): void {
    this.setChart();
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
}
