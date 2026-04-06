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
  nextPage: boolean = false;
  attireImage: string = '';
  
  ngOnInit() {
    this.getDimensions();
  }
  
  navigate(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  toggleDisplay(): void {
    if (this.isClicked) return;

    this.isClicked = true;
    this.nextPage = true;
  }

  @HostListener('window:resize')
  onResize() {
    this.getDimensions();
  }

  getDimensions() {
    this.attireImage = window.innerWidth <= 968
      ? 'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875645/Attire_Guide_Mobile_gbnnrp.png'
      : 'https://res.cloudinary.com/dlk5shsgs/image/upload/v1775466071/Attire_Guide_Desktop_lrpktn.png';
  }

  back(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
