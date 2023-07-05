import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomObervabelComponent } from './custom-obervabel.component';

describe('CustomObervabelComponent', () => {
  let component: CustomObervabelComponent;
  let fixture: ComponentFixture<CustomObervabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomObervabelComponent]
    });
    fixture = TestBed.createComponent(CustomObervabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
