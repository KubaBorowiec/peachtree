import { TestBed } from '@angular/core/testing';

import { MockTransactionsService } from './mock-transactions.service';

describe('MockTransactionsService', () => {
  let service: MockTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
