import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-invitation',
  imports: [],
  templateUrl: './main-invitation.html',
  styleUrl: './main-invitation.scss'
})
export class MainInvitation {
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log('Unique ID:', id);
    });
  }

  continue() {
    this.router.navigate(['/main/1/menu'])
  }
}
