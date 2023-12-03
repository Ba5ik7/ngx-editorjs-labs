import { TestBed } from '@angular/core/testing';

import { NgxWebstorageService } from './ngx-webstorage.service';

describe('NgxWebstorageService', () => {
  let service: NgxWebstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWebstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
