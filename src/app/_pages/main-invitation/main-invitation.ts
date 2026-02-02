import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-invitation',
  imports: [],
  templateUrl: './main-invitation.html',
  styleUrl: './main-invitation.scss'
})
export class MainInvitation {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  name: string = sessionStorage.getItem('guestName') || 'Guest';

  continue() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.router.navigate([`/main/${id}/menu`]);
    });
  }
}
