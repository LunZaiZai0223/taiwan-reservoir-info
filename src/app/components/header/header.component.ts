import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentMode: string = 'dark';

  constructor(private renderer: Renderer2, private translate: TranslateService) {}

  ngOnInit(): void {
    this.setBodyModeClass();
  }

  onSwitchMode(mode: string): void {
    this.currentMode = mode;
    this.setBodyModeClass();
  }

  onSwitchLang(): void {
    this.translate.use(this.translate.currentLang === 'zh-tw' ? 'en' : 'zh-tw');
  }

  private setBodyModeClass(): void {
    switch (this.currentMode) {
      case 'dark':
        this.renderer.removeClass(document.body, 'light');
        this.renderer.addClass(document.body, 'dark');
        break;
      case 'light':
        this.renderer.removeClass(document.body, 'dark');
        this.renderer.addClass(document.body, 'light');
        break;
    }
  }
}
