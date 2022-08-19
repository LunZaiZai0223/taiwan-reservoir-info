import { Component, OnInit } from '@angular/core';
import { ReservoirService } from '../services/reservoir.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(private reservoirService: ReservoirService) {}

  ngOnInit(): void {
    // this.processFetchReservoirProcess();
  }

  private processFetchReservoirProcess(): void {
    this.reservoirService.getReservoirDetail().subscribe(result => {
      console.log(result);
    });
  }
}
