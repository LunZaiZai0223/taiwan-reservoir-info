import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
})
export class DateAgoPipe implements PipeTransform {
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
        // TODO: 最後 i18n 從這邊喬
        counter = Math.floor(seconds / intervals[i]);
        if (i === 'hour') {
          if (counter > 0) {
            return `${counter} 小時前`;
          }
          if (counter === 0) {
            return `1 小時內`;
          }
        }
      }
    }

    return value;
  }
}

// ref. https://stackoverflow.com/questions/61341891/is-there-are-angular-date-ago-pipe
