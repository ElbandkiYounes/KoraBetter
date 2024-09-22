import { TestBed } from '@angular/core/testing';

import { MatcheDetailsService } from './matche-details.service';

describe('MatcheDetailsService', () => {
  let service: MatcheDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatcheDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
