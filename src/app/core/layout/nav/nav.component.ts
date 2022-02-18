import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserStreamService } from '../../services/user-stream/user-stream.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private userStreamService: UserStreamService) {}

  user$ = this.userStreamService.stream;
}
