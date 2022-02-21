import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserStreamService } from 'src/app/core/services/user-stream/user-stream.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { updateUser } from 'src/app/core/state/state.actions';
import { CustomHttpResponse } from 'src/app/shared/models/http.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$?: Observable<CustomHttpResponse<User[]>>;
  selectedUser: string | undefined;

  constructor(
    private userService: UserService,
    private userStreamService: UserStreamService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.users$ = this.userService.fetchUsers();
  }

  selectUser(arg0: string) {
    this.selectedUser = arg0;
    // this.userStreamService.add(arg0);
    this.store.dispatch(updateUser({ value: arg0 }));
  }
}
