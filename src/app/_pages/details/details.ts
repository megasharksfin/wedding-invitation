import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details implements OnInit {
  constructor (private router: Router, private route: ActivatedRoute) {}

  isClicked: boolean = false;
  currentPage: number = 1;
  attireImage: string = '';
  
  ngOnInit() {
    this.getDimensions();
  }
  
  navigate(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  toggleDisplay(): void {
    if (this.currentPage === 3) {
      return;
    }
    this.currentPage++;
    console.log('current page', this.currentPage);
  }

  @HostListener('window:resize')
  onResize() {
    this.getDimensions();
  }

  getDimensions() {
    this.attireImage = window.innerWidth <= 968
      ? 'https://res.cloudinary.com/dlk5shsgs/image/upload/v1775469280/Attire_Guide_Mobile_u7mqfo.png'
      : 'https://res.cloudinary.com/dlk5shsgs/image/upload/v1775466071/Attire_Guide_Desktop_lrpktn.png';
  }

  back(): void {
    this.currentPage--;
    console.log('current page', this.currentPage);
  }
}
