import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationMenu } from './invitation-menu';

describe('InvitationMenu', () => {
  let component: InvitationMenu;
  let fixture: ComponentFixture<InvitationMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitationMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitationMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
