import { TestBed } from '@angular/core/testing';

import { UserStreamService } from './user-stream.service';

describe('UserStreamService', () => {
  let service: UserStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#add', () => {
    it('should add event to stream', () => {
      // Given
      const event = 'foo';

      // Then
      service.stream.subscribe((val: string) => expect(val).toEqual(event));

      // When
      service.add(event);
    });
  });
});
