import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';

import { ChartComponent } from 'ng-apexcharts';

import { reservoirAreaChartConfig } from '../reservoir-area-chart-config';
import { ReservoirAreaChartModel } from '../../models/reservoir-area-chart-model';

@Component({
  selector: 'app-reservoir-chart',
  templateUrl: './reservoir-chart.component.html',
  styleUrls: ['./reservoir-chart.component.scss'],
})
export class ReservoirChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) chart!: ChartComponent;
  @Input() chartData: any[] = [];
  @Input() reservoirName: string = '';
  @HostBinding('class') classes = 'chart';

  chartOptions!: Partial<ReservoirAreaChartModel>;

  constructor() {}

  ngOnInit(): void {
    this.setChart();
  }

  private setChart(): void {
    this.chartOptions = { ...reservoirAreaChartConfig, series: [{ data: this.chartData }] };
  }
}
