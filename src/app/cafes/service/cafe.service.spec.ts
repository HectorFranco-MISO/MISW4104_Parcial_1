/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CafeService } from './cafe.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Cafe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeService],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
