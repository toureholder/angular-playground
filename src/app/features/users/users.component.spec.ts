import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';
import { fakeUserList } from 'src/app/shared/models/user.model';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let template: HTMLElement;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('mockUserService', ['fetchUsers']);

    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [{ provide: UserService, useValue: mockUserService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('UI integration tests', () => {
    it('should render an item for each user', () => {
      // Given
      mockUserService.fetchUsers.and.returnValue(
        of({ status: 200, data: fakeUserList })
      );

      // When
      component.ngOnInit();
      fixture.detectChanges();

      // Then
      const userEl = template.querySelectorAll('[data-test="user-element"]');
      expect(userEl.length).toEqual(fakeUserList.length);
    });
  });
});
