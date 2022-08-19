import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ReservoirChartComponent } from './components/reservoir-chart/reservoir-chart.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent, ReservoirChartComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgApexchartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
