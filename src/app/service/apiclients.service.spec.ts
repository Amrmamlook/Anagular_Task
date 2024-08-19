import { TestBed } from '@angular/core/testing';

import { APIClientsService } from './apiclients.service';

describe('APIClientsService', () => {
  let service: APIClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
