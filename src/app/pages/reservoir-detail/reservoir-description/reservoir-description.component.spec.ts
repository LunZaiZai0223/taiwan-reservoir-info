import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirDescriptionComponent } from './reservoir-description.component';

describe('ReservoirDescriptionComponent', () => {
  let component: ReservoirDescriptionComponent;
  let fixture: ComponentFixture<ReservoirDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservoirDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservoirDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
