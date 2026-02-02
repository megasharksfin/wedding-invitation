import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Carousel } from '../../_components'

@Component({
  selector: 'app-invitation-menu',
  imports: [CommonModule,Carousel],
  templateUrl: './invitation-menu.html',
  styleUrl: './invitation-menu.scss',
})
export class InvitationMenu {
  constructor(
  ) {
  }

  menuOpened: boolean = false;
  showElement: boolean  = true;
  isClicked: boolean = false;
  showMenu: boolean = false;

  toggleMenu() {
    if (this.isClicked) return;

    this.isClicked = true;
    this.menuOpened = true;
  }

  onIntroFadeEnd(e: TransitionEvent) {
    if (e.propertyName !== 'opacity') return;

    this.showElement = false;
    this.showMenu = true;
  }
}
