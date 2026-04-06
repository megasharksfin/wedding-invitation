import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Carousel, OurStory } from '../../_components'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invitation-menu',
  imports: [CommonModule,Carousel],
  templateUrl: './invitation-menu.html',
  styleUrl: './invitation-menu.scss',
})
export class InvitationMenu implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  menuOpened: boolean = false;
  showElement: boolean  = true;
  isClicked: boolean = false;
  showMenu: boolean = false;
  optionSelected: boolean = false;
  selected: string = '';

  ngOnInit(): void {
    const sessionMenu = sessionStorage.getItem('menuOpened');

    if (!sessionMenu)
      return;
  
    this.isClicked = true;
    this.menuOpened = true;
    this.showElement = false;
    this.showMenu = true;
  }

  toggleMenu() {
    if (this.isClicked) return;

    this.isClicked = true;
    this.menuOpened = true;
    this.showElement = false;
    this.showMenu = true;
    sessionStorage.setItem('menuOpened', 'true');
  }

  onIntroFadeEnd(e: TransitionEvent) {
    if (e.propertyName !== 'opacity') return;

    this.showElement = false;
    this.showMenu = true;
  }

  navigate(dest: string) {
    if (!dest) {
      return;
    }

    switch (dest) {
      case 'our-story':
        this.router.navigate(['./our-story'], { relativeTo:  this.route });
        break;
      case 'details':
        this.router.navigate(['./details'], { relativeTo: this.route });
        break;
      case 'maps':
        this.router.navigate(['./maps'], { relativeTo: this.route });
        break;
      case 'faqs':
        this.router.navigate(['./faqs'], { relativeTo: this.route });
        break;
      case 'rsvp':
        this.router.navigate(['./rsvp'], { relativeTo: this.route });
        break;
      default:
        this.router.navigate(['**']);
        break;
    }
  }
}
