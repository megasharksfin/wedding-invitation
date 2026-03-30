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
    this.attireImage = window.innerWidth > 968
      ? 'element_images/Buttons/Attire Guide Desktop.png'
      : 'element_images/Buttons/Attire Guide Mobile.png';
  }

  back(): void {
    location.reload();
  }
}
