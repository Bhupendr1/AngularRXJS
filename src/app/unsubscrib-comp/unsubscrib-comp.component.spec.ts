import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribCompComponent } from './unsubscrib-comp.component';

describe('UnsubscribCompComponent', () => {
  let component: UnsubscribCompComponent;
  let fixture: ComponentFixture<UnsubscribCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnsubscribCompComponent]
    });
    fixture = TestBed.createComponent(UnsubscribCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
