import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentsDetailsComponent } from './create-students-details.component';

describe('CreateStudentsDetailsComponent', () => {
  let component: CreateStudentsDetailsComponent;
  let fixture: ComponentFixture<CreateStudentsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
