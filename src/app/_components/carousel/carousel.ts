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
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875742/1_xrltog.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875741/2_t2cgwp.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875740/3_fmpwms.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875739/4_cmzgoy.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875736/5_t7a1pe.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875735/6_kporsk.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875738/7_oxkoki.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875735/8_pghppf.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875735/9_gzkeny.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875730/10_xztxjo.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875740/11_a7flxv.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875732/12_vaqdci.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875732/13_hsuddf.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875735/14_i1dwcq.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875734/15_u78vzv.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875733/16_yruhca.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875730/17_enewqs.png',
    'https://res.cloudinary.com/dlk5shsgs/image/upload/v1774875737/18_qlccao.png',
  ];
}
