import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RsvpService } from '../../_services';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rsvp',
  imports: [ReactiveFormsModule],
  templateUrl: './rsvp.html',
  styleUrl: './rsvp.scss',
})
export class Rsvp implements OnInit {
  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private rsvpService: RsvpService,
  ) {}

  isSubmitted = false;
  guestName = signal('');
  rsvpForm: FormGroup = new FormGroup({
    response: new FormControl(''),
  });

  ngOnInit(): void {
    const id = this.route.snapshot.root.children[0]?.params['id'];

    if (!id) {
      return;
    }

    const data: any = {
      id,
      action: 'matchId',
    };
    
    this.rsvpService.sheetsPost$(JSON.stringify(data)).subscribe({
      next: (res) => {
        const { result, message, name } = res as any;
        
        if (result === 'error') {
          console.log(message);
          return;
        }

        this.guestName.update(value => {
          return name;
        });
      },
      error: (err) => {
        console.log('error', err);
      }
    });
  }

  navigate(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  submitRsvp(): void {
    this.isSubmitted = true;
    
    const id = this.route.snapshot.root.children[0]?.params['id'];
    const response = this.rsvpForm.get('response')?.value;

    const data: any = {
      attending: String(response),
      id,
      action: 'saveRsvp',
    };
    
    this.rsvpService.sheetsPost$(JSON.stringify(data)).subscribe({
      next: ((res) => {
        this.router.navigate(['./submitted'], { relativeTo: this.route });
      }),
      error: ((err) => {
        console.log('error', err);
      }),
    })
  }
}
