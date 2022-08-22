import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ReservoirService } from 'src/app/services/reservoir.service';

import { GetReservoir } from 'src/app/models/GetReservoir.model';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.scss'],
})
export class ChartListComponent implements OnInit, OnDestroy {
  areaList: string[] = ['north', 'middle', 'south'];
  northernReservoirList: GetReservoir[] = [];
  middleReservoirList: GetReservoir[] = [];
  southernReservoirList: GetReservoir[] = [];

  subscription: Subscription = new Subscription();

  constructor(private reservoirService: ReservoirService) {}

  ngOnInit(): void {
    this.subscription = this.reservoirService.onReservoirData().subscribe(data => {
      // 防止 BehaviorSubject 的初始值 null
      if (data === null) return;
      this.areaList.forEach(area => {
        this.setReservoirListByArea(area, data);
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setReservoirListByArea(area: string, rawData: any): void {
    const wrapper: { [key: string]: string } = {
      north: 'northernReservoirList',
      middle: 'middleReservoirList',
      south: 'southernReservoirList',
    };
    const foundKey: any = wrapper[area];
    this[foundKey as keyof ChartListComponent] = rawData.filter((item: any) => item.area === area);
  }
}
