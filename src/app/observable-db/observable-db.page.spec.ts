import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservableDbPage } from './observable-db.page';

describe('ObservableDbPage', () => {
  let component: ObservableDbPage;
  let fixture: ComponentFixture<ObservableDbPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObservableDbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
