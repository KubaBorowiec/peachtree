import { TestBed } from '@angular/core/testing';

import { MessegeService } from './messeger.service';

describe('MessegeService', () => {
  let service: MessegeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessegeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
