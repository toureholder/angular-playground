import { HttpClient, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/models/http.model';
import { User } from 'src/app/shared/models/user.model';
import { fakeGetUsersResponse } from './models/get-users-response.model';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('mockHttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: mockHttpClient }],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#fetchUsers', () => {
    it('should return event with users when api http response is 200 and has data', () => {
      // Given
      const status = 200;

      mockHttpClient.get.and.returnValue(
        of(new HttpResponse({ body: fakeGetUsersResponse, status: status }))
      );

      // When
      service.fetchUsers().subscribe((event: CustomHttpResponse<User[]>) => {
        // Then
        expect(event.data).toBeTruthy();

        const fistUser = event.data?.[0];

        if (fistUser) {
          expect(fistUser.firstName).toEqual(
            fakeGetUsersResponse.data[0].first_name
          );
        }

        expect(event.status).toEqual(status);
      });
    });

    it('should not return data if response is not 200', () => {
      // Given
      const status = 400;

      mockHttpClient.get.and.returnValue(
        of(new HttpResponse({ body: fakeGetUsersResponse, status: status }))
      );

      // When
      service.fetchUsers().subscribe((event: CustomHttpResponse<User[]>) => {
        // Then
        expect(event.data).toBeFalsy();
        expect(event.status).toEqual(status);
      });
    });
  });
});
