import { TestBed } from '@angular/core/testing';

import { PersonqueueService } from './personqueue.service';

describe('PersonqueueService', () => {
  let service: PersonqueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonqueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
