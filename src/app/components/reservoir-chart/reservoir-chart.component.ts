import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend,
  ApexTooltip,
  ApexStates,
  ApexResponsive,
  ApexGrid,
} from 'ng-apexcharts';

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
  states: ApexStates;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
  grid: ApexGrid;
};

// export const series = {
//   testDataOne: {
//     percentage: [100, 200],
//   },
// };

export const series = {
  monthDataSeries1: {
    prices: [77.5, 77.5],
    dates: ['13 Nov 2017', '14 Nov 2017'],
  },
};

@Component({
  selector: 'app-reservoir-chart',
  templateUrl: './reservoir-chart.component.html',
  styleUrls: ['./reservoir-chart.component.scss'],
})
export class ReservoirChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;

  constructor() {
    // this.chartOptions = {
    //   series: [
    //     {
    //       name: 'STOCK ABC',
    //       data: series.monthDataSeries1.prices,
    //     },
    //   ],
    //   chart: {
    //     type: 'area',
    //     height: 350,
    //     zoom: {
    //       enabled: false,
    //     },
    //   },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   stroke: {
    //     curve: 'straight',
    //   },
    //
    //   title: {
    //     text: 'Fundamental Analysis of Stocks',
    //     align: 'left',
    //   },
    //   subtitle: {
    //     text: 'Price Movements',
    //     align: 'left',
    //   },
    //   labels: series.monthDataSeries1.dates,
    //   xaxis: {
    //     labels: {
    //       show: false,
    //     },
    //   },
    //   yaxis: {
    //     opposite: true,
    //     labels: {
    //       show: false,
    //     },
    //   },
    //   legend: {
    //     show: false,
    //     horizontalAlign: 'left',
    //   },
    //   states: {
    //     hover: {
    //       filter: {
    //         type: 'none',
    //       },
    //     },
    //   },
    //   tooltip: {
    //     enabled: false,
    //   },
    // };
  }

  ngOnInit(): void {
    this.setChart();
  }

  private setChart(): void {
    this.chartOptions = {
      series: [
        {
          name: 'STOCK ABC',
          data: series.monthDataSeries1.prices,
        },
      ],
      chart: {
        type: 'area',
        height: 200,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      // title: {
      //   text: '石門水庫（77%）',
      //   align: 'left',
      //   floating: true,
      // },
      // subtitle: {
      //   text: 'Price Movements',
      //   align: 'left',
      // },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        min: 0,
        max: 100,
        tickAmount: 20,
        axisBorder: {
          show: false,
          color: 'transparent',
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
      },
      legend: {
        show: false,
        horizontalAlign: 'left',
      },
      states: {
        hover: {
          filter: {
            type: 'none',
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              width: '366',
            },
          },
        },
      ],
      grid: {
        show: false,
        padding: {
          left: -10,
          right: 0,
        },
      },
    };
  }
}
