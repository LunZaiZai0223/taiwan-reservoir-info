// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // 從別的專案拿到的 API 網址（這邊為主要的資訊來源 API）
  detailApiUrl:
    'https://script.googleusercontent.com/macros/echo?user_content_key=LVIDQmhSrWOPABLg1bW6UsiPCQc3LObYzdtfdNIiTwCvd2hgbA8V9Pzt9tmcwrM4xnPJuOiBYWnrCq3CIe6rsbgRNXUHfIt5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC02W9NgtydlVxBi8ZVYNE3EaC5kBapbMQehFxYBO5VeiAgulVhFrmJaBxDi1Dzff3V8hGIfOYGuVVugCyiZpB7PpP6BIrbXzw&lib=MUS6h8Wvwtj_6r7KE-7vi86mwDtmjqP8O',
  // 政府公開的 API 網址
  additionalApiUrl: 'https://fhyv.wra.gov.tw/FhyWeb/v1/Api/Reservoir/Visual?$format=JSON'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
