import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirDetailComponent } from './reservoir-detail.component';

describe('ReservoirDetailComponent', () => {
  let component: ReservoirDetailComponent;
  let fixture: ComponentFixture<ReservoirDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservoirDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservoirDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
