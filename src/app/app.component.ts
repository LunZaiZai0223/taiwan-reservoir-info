import { Component, OnDestroy, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();

  constructor(private translate: TranslateService, private titleService: TitleService) {}

  ngOnInit(): void {
    this.setDefaultLang();
    this.subscription = this.translate.onLangChange.subscribe((langEvent: LangChangeEvent) => {
      this.titleService.setTitleByLang(langEvent.lang);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setDefaultLang(): void {
    // 取得使用者瀏覽器的語言設定
    const browserLang: string = window.navigator.language.toLowerCase();
    if (browserLang.includes('zh')) {
      this.translate.use('zh-tw');
    } else {
      this.translate.use('en');
    }
  }
}
