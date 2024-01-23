import { TestBed } from '@angular/core/testing';

import { RequestForApprovalService } from './request-for-approval.service';

describe('RequestForApprovalService', () => {
  let service: RequestForApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestForApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
