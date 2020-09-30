import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionOneComponent } from './transaction-one.component';

describe('TransactionOneComponent', () => {
  let component: TransactionOneComponent;
  let fixture: ComponentFixture<TransactionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
