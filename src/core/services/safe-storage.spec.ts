import { TestBed } from '@angular/core/testing';

import { SafeStorage } from './safe-storage';

describe('SafeStorage', () => {
  let service: SafeStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafeStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
