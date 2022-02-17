import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';
import { CustomHttpResponse } from 'src/app/shared/models/http.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$?: Observable<CustomHttpResponse<User[]>>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.fetchUsers();
  }
}
