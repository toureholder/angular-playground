import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { UserStreamService } from '../../services/user-stream/user-stream.service';
import { selectFeatureUser } from '../../state/state.selectors';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  user$: Observable<string> | undefined;

  constructor(private store: Store) {
    this.user$ = store.select(selectFeatureUser);
  }
}
