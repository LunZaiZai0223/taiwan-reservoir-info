export interface GetAdditionalData {
  AreaCode: string;
  AreaName: string;
  ReservoirRealTimeInfos: ReservoirRealTimeInfos[];
}

export interface ReservoirRealTimeInfos {
  StationNo: string;
  StationName: ReservoirName;
  Time: string;
  EffectiveStorage: number;
  PercentageOfStorage: number;
  Status: number;
  AccumulatedRainfall: number;
}

export interface ReservoirName {
  zh_TW: string;
}
