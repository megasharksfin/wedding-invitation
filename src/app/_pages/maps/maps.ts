import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  imports: [],
  templateUrl: './maps.html',
  styleUrl: './maps.scss',
})
export class Maps {
  constructor (
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  
  navigate(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getMap(destination: string): void {
    switch (destination) {
      case 'marcia-adams':
        this.router.navigate(['./marcia-adams'], { relativeTo: this.route });
        break;
      case 'coth':
        this.router.navigate(['./coth'], { relativeTo: this.route });
        break;
    }
  }
}
