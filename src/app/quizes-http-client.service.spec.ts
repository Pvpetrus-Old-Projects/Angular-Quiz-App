import { TestBed } from '@angular/core/testing';

import { QuizesHttpClientService } from './quizes-http-client.service';

describe('QuizesHttpClientService', () => {
  let service: QuizesHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizesHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
