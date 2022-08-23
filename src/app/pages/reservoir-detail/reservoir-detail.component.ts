import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { GetReservoir } from 'src/app/models/GetReservoir.model';
import { ReservoirService } from 'src/app/services/reservoir.service';

@Component({
  selector: 'app-reservoir-detail',
  templateUrl: './reservoir-detail.component.html',
  styleUrls: ['./reservoir-detail.component.scss'],
})
export class ReservoirDetailComponent implements OnInit, OnDestroy {
  reservoirDetail: GetReservoir = {} as GetReservoir;
  subscription: Subscription = new Subscription();

  constructor(private reservoirService: ReservoirService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.reservoirService
      .onReservoirData()
      .pipe(
        tap(() => {
          this.reservoirDetail = this.reservoirService.getReservoirItemById(this.route.snapshot.params['reservoirId'])!;
          console.log(this.reservoirDetail);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
