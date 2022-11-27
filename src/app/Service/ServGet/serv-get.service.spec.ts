import { TestBed } from '@angular/core/testing';

import { ServGetService } from './serv-get.service';

describe('ServGetService', () => {
  let service: ServGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
