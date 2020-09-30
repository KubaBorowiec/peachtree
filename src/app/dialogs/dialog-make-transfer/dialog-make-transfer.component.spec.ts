import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMakeTransferComponent } from './dialog-make-transfer.component';

describe('DialogMakeTransferComponent', () => {
  let component: DialogMakeTransferComponent;
  let fixture: ComponentFixture<DialogMakeTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMakeTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMakeTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
