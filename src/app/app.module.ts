import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ReservoirChartComponent } from './components/reservoir-chart/reservoir-chart.component';
import { ChartListComponent } from './pages/chart-list/chart-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { ReservoirDetailComponent } from './pages/reservoir-detail/reservoir-detail.component';
import { ReservoirDescriptionComponent } from './pages/reservoir-detail/reservoir-description/reservoir-description.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { NotingFoundComponent } from './components/noting-found/noting-found.component';

export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http);
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ReservoirChartComponent,
    ChartListComponent,
    HeaderComponent,
    FooterComponent,
    DateAgoPipe,
    ReservoirDetailComponent,
    ReservoirDescriptionComponent,
    OverlayComponent,
    NotingFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'zh-tw',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
