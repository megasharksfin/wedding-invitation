import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { faq } from '../../_interfaces';

@Component({
  selector: 'app-faqs',
  imports: [NgbAccordionModule],
  templateUrl: './faqs.html',
  styleUrl: './faqs.scss',
})
export class Faqs {

  accordionList: faq[] = [
    {
      question: '1. What date should I RSVP by?',
      answer: 'Please RSVP by May 1, 2026',
    },
    {
      question: '2. What are the addresses of the wedding ceremony and reception venues?',
      answer: `Chapel on the Hill, Don Bosco Batulao, Brgy. Cahil, Calaca Batangas.\r\nMarcia Adams Restaurant, Sikat Rd, Alfonso, 4123 Cavite`,
    },
    {
      question: '3. What is the dress code and motif for your wedding?',
      answer: 'Our dress code is semi-formal. The color motif for the wedding is deep sunset -- Orange, Burgundy, Plum. We have created a pinterest board as reference to what colors are preferred. While we appreciate sticking to the attire guide, it is not mandatory and everyone invited is welcome regardless of outfit.'
    },
    {
      question: '4. What is the weather like in the area?',
      answer: 'Frequent rainshowers are expected in the area on Septembers. Temperatures are usually around 20-24 degrees Celsius. We advise to bring a shawl or a cardigan to aid for the cold weather.'
    },
    {
      question: '5. Am I allowed to bring a plus-one?',
      answer: 'While we would love to celebrate with as many people as we can, we want to keep the event intimate and small. The invitation is good for one person only (unless otherwise stated).'
    },
    {
      question: '6. What is the wedding itinerary?',
      answer: 'Ceremony starts at 2pm. This would probably last an hour or an hour and a half. Cocktail area opens at 4pm, followed by the Reception, which is anticipated to wrap around 7-8pm. There are no formal programs so we can all dine and mingle as comfortably as we can.'
    },
    {
      question: '7. What time should I arrive?',
      answer: 'Call-time is 1:30pm. We recommed arriving 15-30 minutes before the call-time.'
    },
    {
      question: '8. Am I allowed to take photos at your wedding?',
      answer: 'Yes, taking photos at our wedding is allowed, but we request that everyone be mindful of the hired professional photographers and videographers.'
    },
    {
      question: '9. Who can I contact on the day of the wedding?',
      answer: 'We hired a coordinator to answer all queries on the day of the wedding. Contact details will be disseminated soon.'
    },
  ]
  
  constructor (
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  navigate(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
