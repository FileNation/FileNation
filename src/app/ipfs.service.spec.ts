import { TestBed, inject } from '@angular/core/testing';

import { IpfsService } from './ipfs.service';

describe('IpfsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IpfsService]
    });
  });

  it('should be created', inject([IpfsService], (service: IpfsService) => {
    expect(service).toBeTruthy();
  }));
});
