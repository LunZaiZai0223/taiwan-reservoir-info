import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentMode: string = 'dark';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setBodyModeClass();
  }

  onSwitchMode(mode: string): void {
    console.log(mode);
    this.currentMode = mode;
    this.setBodyModeClass();
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
