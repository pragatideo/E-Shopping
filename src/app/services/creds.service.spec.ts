import { TestBed } from '@angular/core/testing';

import { CredsService } from './creds.service';

describe('CredsService', () => {
  let service: CredsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
