import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
