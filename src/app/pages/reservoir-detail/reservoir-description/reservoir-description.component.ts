import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservoirDetail } from 'src/app/models/ReservoirDetail.model';
import { RESERVOIR_DESCRIPTION_LIST } from 'src/app/constant/reservoir/reservoir-description-list';

@Component({
  selector: 'app-reservoir-description',
  templateUrl: './reservoir-description.component.html',
  styleUrls: ['./reservoir-description.component.scss'],
})
export class ReservoirDescriptionComponent implements OnInit {
  @Input() reservoirName: string = '';

  reservoirDetail: ReservoirDetail = {} as ReservoirDetail;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reservoirDetail = RESERVOIR_DESCRIPTION_LIST.find(
      item => item.id === this.route.snapshot.params['reservoirId']
    )!;
  }
}
