import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTooltip,
  ApexStates,
  ApexResponsive,
  ApexGrid,
  ApexTheme,
} from 'ng-apexcharts';

export interface ReservoirAreaChartModel {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  states: ApexStates;
  tooltip: ApexTooltip;
  responsive: ApexResponsive[];
  grid: ApexGrid;
  theme: ApexTheme;
  colors: string[];
}
