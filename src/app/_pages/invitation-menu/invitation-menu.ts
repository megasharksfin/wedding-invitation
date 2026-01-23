import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation-menu',
  imports: [],
  templateUrl: './invitation-menu.html',
  styleUrl: './invitation-menu.scss'
})
export class InvitationMenu {
  constructor() {}

  menuHidden: boolean = true;

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
    const weddingNames = document.querySelector('.wedding-names');
    const introText = document.querySelector('.intro');
    const noticeText = document.querySelector('.notice');

    noticeText?.classList.add('fade-out');
    weddingNames?.classList.add('slide-up');
    introText?.classList.add('fade-out');
  }
}
