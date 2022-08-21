import { ReservoirAreaChartModel } from '../models/reservoir-area-chart-model';

export const reservoirAreaChartConfig: ReservoirAreaChartModel = {
  series: [
    {
      data: [],
    },
  ],
  chart: {
    type: 'area',
    height: 100,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
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
    // {
    //   breakpoint: 768,
    //   options: {
    //     chart: {
    //       width: '366',
    //     },
    //   },
    // },
  ],
  grid: {
    show: false,
    padding: {
      top: 0,
    },
  },
  theme: {
    mode: 'light',
  },
  colors: [],
};
