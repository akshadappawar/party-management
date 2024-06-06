import { TestBed } from '@angular/core/testing';

import { PartymanagementService } from './partymanagement.service';

describe('PartymanagementService', () => {
  let service: PartymanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartymanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
