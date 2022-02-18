import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStreamService {
  private subject = new Subject<string>();

  stream: Observable<string> = this.subject.asObservable();

  add(event: string) {
    this.subject.next(event);
  }
}
