import { TestBed, inject } from '@angular/core/testing';

import { GraphsService } from './graphs.service';

describe('GraphsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphsService]
    });
  });

  it('should be created', inject([GraphsService], (service: GraphsService) => {
    expect(service).toBeTruthy();
  }));
});
