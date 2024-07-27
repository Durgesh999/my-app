import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VihicleComponent } from './vihicle.component';

describe('VihicleComponent', () => {
  let component: VihicleComponent;
  let fixture: ComponentFixture<VihicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VihicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VihicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
