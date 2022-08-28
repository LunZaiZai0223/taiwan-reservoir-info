import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'dateAgo',
  // 更換語系的時候也可以再執行一次 pipe
  pure: false,
})
export class DateAgoPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(value: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      // less than 30 seconds ago will show as 'Just now'
      if (seconds < 29) return 'Just now';

      const intervals: { [key: string]: number } = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
      };
      let counter;
      // 跑物件的迴圈，如果符合條件就會 return，終止 for...in loop 物件
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (i === 'hour') {
          if (counter > 0) {
            return this.translateService.currentLang === 'zh-tw' ? `${counter} 小時前` : `${counter} hours ago`;
          }
          if (counter === 0) {
            return this.translateService.currentLang === 'zh-tw' ? '1 小時內' : 'within an hour';
          }
        }
      }
    }

    return value;
  }
}

// ref. https://stackoverflow.com/questions/61341891/is-there-are-angular-date-ago-pipe
