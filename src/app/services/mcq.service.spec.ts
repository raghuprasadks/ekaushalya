import { TestBed } from '@angular/core/testing';

import { McqService } from './mcq.service';

describe('McqService', () => {
  let service: McqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(McqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
