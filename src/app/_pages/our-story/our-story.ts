import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-our-story',
  imports: [],
  templateUrl: './our-story.html',
  styleUrl: './our-story.scss',
})
export class OurStory {
  currentStep: number = 1;
  
  constructor (
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  navigate(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  next(): void {
    this.currentStep++;
  }

  prev(): void {
    this.currentStep--;
  }
}
