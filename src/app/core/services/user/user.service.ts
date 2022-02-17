import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CustomHttpResponse } from 'src/app/shared/models/http.model';
import { User } from 'src/app/shared/models/user.model';
import {
  ApiUser,
  GetUsersApiResponse,
} from './models/get-users-response.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<CustomHttpResponse<User[]>> {
    return this.http
      .get<GetUsersApiResponse>('https://reqres.in/api/users', {
        observe: 'response',
      })
      .pipe(
        map((response) =>
          this.apiResponseToUserListCustomHttpResponse(response)
        )
      );
  }

  private apiResponseToUserListCustomHttpResponse(
    response: HttpResponse<GetUsersApiResponse>
  ): CustomHttpResponse<User[]> {
    const data =
      response.status === 200
        ? response.body?.data.map(this.mapApiUserToDomainUser)
        : undefined;
    return {
      status: response.status,
      data: data,
    };
  }

  private mapApiUserToDomainUser(apiUser: ApiUser): User {
    return {
      id: apiUser.id,
      email: apiUser.email,
      firstName: apiUser.first_name,
      lastName: apiUser.last_name,
      avatarUrl: apiUser.avatar,
    };
  }
}
