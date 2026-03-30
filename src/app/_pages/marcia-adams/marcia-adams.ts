import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-marcia-adams',
  imports: [],
  templateUrl: './marcia-adams.html',
  styleUrl: './marcia-adams.scss',
})
export class MarciaAdams {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  navigate(): void {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  back(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
