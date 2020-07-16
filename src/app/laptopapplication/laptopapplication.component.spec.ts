import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopapplicationComponent } from './laptopapplication.component';

describe('LaptopapplicationComponent', () => {
  let component: LaptopapplicationComponent;
  let fixture: ComponentFixture<LaptopapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaptopapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
