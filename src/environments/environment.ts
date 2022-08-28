// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // 從別的專案拿到的 API 網址（這邊為主要的資訊來源 API）
  detailApiUrl:
    'https://script.googleusercontent.com/macros/echo?user_content_key=LVIDQmhSrWOPABLg1bW6UsiPCQc3LObYzdtfdNIiTwCvd2hgbA8V9Pzt9tmcwrM4xnPJuOiBYWnrCq3CIe6rsbgRNXUHfIt5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC02W9NgtydlVxBi8ZVYNE3EaC5kBapbMQehFxYBO5VeiAgulVhFrmJaBxDi1Dzff3V8hGIfOYGuVVugCyiZpB7PpP6BIrbXzw&lib=MUS6h8Wvwtj_6r7KE-7vi86mwDtmjqP8O',
  // 政府公開的 API 網址
  // 但現在找不到申請 API key 的辦法，等待客服回覆中...
  additionalApiUrl: 'https://data.wra.gov.tw/OpenAPI/api/OpenData/50C8256D-30C5-4B8D-9B84-2E14D5C6DF71/Data'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
