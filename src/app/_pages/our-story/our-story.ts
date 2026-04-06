import { CommonModule } from '@angular/common';
import { Component, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-our-story',
  imports: [CommonModule],
  templateUrl: './our-story.html',
  styleUrl: './our-story.scss',
})
export class OurStory implements OnDestroy {
  currentStep: number = 1;
  visibleImages = signal([true, false, false, false]);
  classPictureTransition = signal(false);
  private timers: any[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  navigate(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  turnPage(toPage: number): void {
    if (this.currentStep === 16) {
      this.router.navigate(['../details'], { relativeTo: this.route });
      return;
    }
    
    this.currentStep += toPage;

    if (this.currentStep === 3) {
      this.startImageTimers();
    }

    if (this.currentStep === 6) {
      console.log('class picture transition', this.classPictureTransition.toString());
      setTimeout(() => {
        this.classPictureTransition.update(() => true);
        console.log('after timeout', this.classPictureTransition.toString());
      }, 1200);
    }
    console.log('current step', this.currentStep);
  }
  startImageTimers() {
    this.timers.forEach(t => clearTimeout(t));
    this.timers = [];

    [1, 2, 3].forEach((imgIndex, i) => {
      const timer = setTimeout(() => {
        this.visibleImages.update(imgs => {
          const updated = [...imgs];
          updated[imgIndex] = true;
          return updated;
        });
      }, (i + 1) * 1000);
      this.timers.push(timer);
    });
  }

  nextLink(): void {
    this.router.navigate(['../details'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.timers.forEach(t => clearTimeout(t));
  }
}
