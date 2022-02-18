import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserStreamService } from 'src/app/core/services/user-stream/user-stream.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { fakeUserList } from 'src/app/shared/models/user.model';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockUserService: jasmine.SpyObj<UserService>;
  let mockUserStreamService: jasmine.SpyObj<UserStreamService>;
  let template: HTMLElement;

  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj('mockUserService', ['fetchUsers']);
    mockUserStreamService = jasmine.createSpyObj('mockUserStreamService', [
      'add',
    ]);

    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: UserStreamService, useValue: mockUserStreamService },
      ],
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
    beforeEach(() => {
      // Given
      mockUserService.fetchUsers.and.returnValue(
        of({ status: 200, data: fakeUserList })
      );
    });

    describe('#selectuser', () => {
      it('should update selected user', () => {
        // Given
        component.selectedUser = '';

        // When
        component.selectUser('Tom');

        // Then
        expect(component.selectedUser).toEqual('Tom');
      });

      it('should add name to user stream service stream', () => {
        // When
        component.selectUser('Tom');

        // Then
        expect(mockUserStreamService.add).toHaveBeenCalledWith('Tom');
      });
    });

    it('should render an item for each user', () => {
      // When
      component.ngOnInit();
      fixture.detectChanges();

      // Then
      const userEls = template.querySelectorAll('[data-test="user-element"]');
      expect(userEls.length).toEqual(fakeUserList.length);
    });

    it('should show selected user when a user button is clicked', () => {
      // When
      component.ngOnInit();
      fixture.detectChanges();
      const userEls = template.querySelectorAll('[data-test="user-element"]');

      const firstButton = userEls[0] as HTMLButtonElement;
      firstButton.click();
      fixture.detectChanges();

      // Then
      const selectedUserEl = template.querySelector(
        '[data-test="selected-user-element"]'
      );
      expect(selectedUserEl?.innerHTML.trim()).toEqual(
        fakeUserList[0].firstName.trim()
      );
    });
  });
});
