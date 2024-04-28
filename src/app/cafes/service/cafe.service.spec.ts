/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CafeService } from './cafe.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { faker } from '@faker-js/faker';

describe('Service: Cafe', () => {

  let service: CafeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeService]
    });

    service = TestBed.inject(CafeService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('Should inject the Service', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));

  it('Should request data from the API', () => {

    const mockData = {
      "id": faker.number.int({ min: 1, max: 100 }),
      "nombre": faker.word.conjunction(),
      "tipo": faker.word.conjunction(),
      "region": faker.location.city(),
      "sabor": faker.word.interjection(),
      "altura": faker.number.int({ min: 300, max: 3000 }),
      "imagen": faker.internet.url()
    }

    service.getAllCafes().subscribe((cafes: any) => expect(cafes).toEqual(mockData));

    const req = httpMock.expectOne(environment.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });

});
