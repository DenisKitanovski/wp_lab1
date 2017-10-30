import { TestBed, inject } from '@angular/core/testing';

import { PredmetManagmentService } from './predmet-managment.service';

describe('PredmetManagmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredmetManagmentService]
    });
  });

  it('should be created', inject([PredmetManagmentService], (service: PredmetManagmentService) => {
    expect(service).toBeTruthy();
  }));
});
