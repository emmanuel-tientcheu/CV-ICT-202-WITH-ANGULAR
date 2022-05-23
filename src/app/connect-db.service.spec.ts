import { TestBed } from '@angular/core/testing';

import { ConnectDBService } from './connect-db.service';

describe('ConnectDBService', () => {
  let service: ConnectDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
