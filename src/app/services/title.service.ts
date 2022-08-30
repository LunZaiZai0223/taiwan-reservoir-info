import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(private title: Title) {}

  setTitleByLang(lang: string): void {
    const wrapper: { [key: string]: string } = {
      'zh-tw': '臺灣水庫資訊',
      en: 'Main Reservoirs of Taiwan',
    };
    this.title.setTitle(wrapper[lang]);
  }
}
