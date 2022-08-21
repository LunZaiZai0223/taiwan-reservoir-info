// API 回傳資料格式:
export interface GetReservoir {
  baseAvailable: string; // 有效容量
  daliyInflow: string; // 今日進水量（萬立方公尺）
  daliyNetflow: number;
  daliyOverflow: string; // 今日出水量（萬立方公尺）
  id: string;
  name: string;
  percentage: number[]; // 水庫當前蓄水百分比
  updateAt: string; // 時間 -> yyyy-mm-dd(hour)
  volumn: string; // 有效蓄水量（萬立方公尺）
  area?: string; // 地區
}
