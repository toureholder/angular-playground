import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserStreamService } from '../../services/user-stream/user-stream.service';

import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let template: HTMLElement;
  let mockUserStreamService: UserStreamService;

  beforeEach(async () => {
    mockUserStreamService = new UserStreamService();

    await TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: UserStreamService, useValue: mockUserStreamService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    template = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('UI integration tests', () => {
    let userEl: HTMLElement | null;

    beforeEach(() => {
      userEl = template.querySelector('[data-test="user-el"]');
    });

    it('should not show user if there is no data is stream', () => {
      expect(userEl?.innerHTML).toBeFalsy();
    });

    it('should show user when data is added to stream', () => {
      // Given
      const user = 'Larry';
      mockUserStreamService.add(user);

      // When
      fixture.detectChanges();

      // Then
      expect(userEl?.innerHTML).toEqual(user);
    });
  });
});
