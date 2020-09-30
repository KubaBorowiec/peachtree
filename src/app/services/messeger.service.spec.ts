import { TestBed } from '@angular/core/testing';

import { MessegerService } from './messeger.service';

describe('MessegerService', () => {
  let service: MessegerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessegerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
