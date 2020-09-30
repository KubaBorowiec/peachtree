import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTransferFormComponent } from './make-transfer-form.component';

describe('MakeTransferFormComponent', () => {
  let component: MakeTransferFormComponent;
  let fixture: ComponentFixture<MakeTransferFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTransferFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeTransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
