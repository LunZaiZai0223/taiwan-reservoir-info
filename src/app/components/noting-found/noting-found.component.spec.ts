import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotingFoundComponent } from './noting-found.component';

describe('NotingFoundComponent', () => {
  let component: NotingFoundComponent;
  let fixture: ComponentFixture<NotingFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotingFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotingFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
