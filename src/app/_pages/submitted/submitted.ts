import { Component, OnInit, signal } from '@angular/core';
import { RsvpService } from '../../_services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-submitted',
  imports: [ReactiveFormsModule],
  templateUrl: './submitted.html',
  styleUrl: './submitted.scss',
})
export class Submitted implements OnInit {
  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private rsvpService: RsvpService,
  ) {}

  rsvp = signal(null);
  hasError = signal(false);
  isMandatoryError = signal(false);
  isSuccess = signal(false);
  isSubmitted = signal(false);
  nameForm: FormGroup = new FormGroup({
    guestName: new FormControl(''),
    response: new FormControl('')
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
        const { result, message, name, rsvp } = res as any;
        console.log('rsvp', rsvp);
        if (result === 'error') {
          console.log(message);
          return;
        }

        this.rsvp.update(() => {
          return rsvp;
        });
      },
      error: (err) => {
        console.log('error', err);
      }
    });
  }

  submitOnBehalf(): void {
    this.isSubmitted.update(() => true);
    this.hasError.update(() => false);
    this.isMandatoryError.update(() => false);

    const guestName = this.nameForm.get('guestName')?.value;
    const userResponse = this.nameForm.get('response')?.value;

    if (!guestName || !userResponse) {
    this.isSubmitted.update(() => false);
    this.isMandatoryError.update(() => true);
      return;
    }

    const nameData = {
      name: guestName.trim(),
      action: 'matchUser',
    };
    this.rsvpService.sheetsPost$(JSON.stringify(nameData)).subscribe({
      next: (res) => {
        const { result, message, id, name } = res as any;

        if (result === 'error') {
          console.log(message);
          this.hasError.update(() => true);
          this.isSubmitted.update(() => false);
          return;
        }

        const rsvpData = {
          id,
          attending: String(userResponse),
          action: 'saveRsvp',
        };
        this.rsvpService.sheetsPost$(JSON.stringify(rsvpData)).subscribe({
          next: (res) => {
            this.isSubmitted.update(() => false);
            this.isSuccess.update(() => true);
            this.nameForm.get('guestName')?.setValue('');
            this.nameForm.get('response')?.setValue(null);
          },
          error: (err) => {
            console.log('err', err);
            this.isSubmitted.update(() => false);
          },
        })
      },
      error: (err) => {
        console.log('err', err);
        this.isSubmitted.update(() => false);
      },
    })
  }
}
