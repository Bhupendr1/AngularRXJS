import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromissComponent } from './promiss.component';

describe('PromissComponent', () => {
  let component: PromissComponent;
  let fixture: ComponentFixture<PromissComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromissComponent]
    });
    fixture = TestBed.createComponent(PromissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
