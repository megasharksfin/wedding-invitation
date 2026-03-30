import { Component } from '@angular/core';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  imports: [NgbCarousel, NgbSlide],
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.scss'],
})
export class Carousel {
  constructor() {}

  slides = [
    '/element_images/Carousel/1.png',
    '/element_images/Carousel/2.png',
    '/element_images/Carousel/3.png',
    '/element_images/Carousel/4.png',
    '/element_images/Carousel/5.png',
    '/element_images/Carousel/6.png',
    '/element_images/Carousel/7.png',
    '/element_images/Carousel/8.png',
    '/element_images/Carousel/9.png',
    '/element_images/Carousel/10.png',
    '/element_images/Carousel/11.png',
    '/element_images/Carousel/12.png',
    '/element_images/Carousel/13.png',
    '/element_images/Carousel/14.png',
    '/element_images/Carousel/15.png',
    '/element_images/Carousel/16.png',
    '/element_images/Carousel/17.png',
    '/element_images/Carousel/18.png',
  ];
}
