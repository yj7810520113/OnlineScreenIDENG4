import { TestBed, inject } from '@angular/core/testing';

import { IndexServiceService } from './index-service.service';

describe('IndexServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexServiceService]
    });
  });

  it('should be created', inject([IndexServiceService], (service: IndexServiceService) => {
    expect(service).toBeTruthy();
  }));
});
