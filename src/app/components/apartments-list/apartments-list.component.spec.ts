import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsListComponent } from './apartments-list.component';

describe('ApartmentsListComponent', () => {
  let component: ApartmentsListComponent;
  let fixture: ComponentFixture<ApartmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
