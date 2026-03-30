import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coth',
  imports: [],
  templateUrl: './coth.html',
  styleUrl: './coth.scss',
})
export class Coth {
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
