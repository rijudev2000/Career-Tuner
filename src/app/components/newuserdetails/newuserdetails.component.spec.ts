import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuserdetailsComponent } from './newuserdetails.component';

describe('NewuserdetailsComponent', () => {
  let component: NewuserdetailsComponent;
  let fixture: ComponentFixture<NewuserdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewuserdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewuserdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
