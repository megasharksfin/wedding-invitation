import { ChangeDetectorRef, Component, signal, Signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RsvpService } from '../../_services/rsvp-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor (
    private router: Router,
    private rsvpService: RsvpService,
    private cdr: ChangeDetectorRef,
  )  { }
  loginForm = new FormGroup({
    uniqueId: new FormControl<string>('')
  });
  isSubmitted: boolean = false;
  isError = signal(false);
  
  validateGuest() {
    const name = this.loginForm.get('uniqueId')?.value;
    if (!name) {
      alert('Please input your name to continue.');
      return;
    }

    this.isSubmitted = true;
    sessionStorage.setItem('guestName', name.trim());
    const data = {
      name: name.trim(),
      action: 'matchUser',
    }
    this.rsvpService.sheetsPost$(JSON.stringify(data)).subscribe({
      next: (res) => {
        const { result, message, id } = res as any;

        if (result === 'error') {
          console.log(message);
          this.isError.set(true);
          this.isSubmitted = false;
          // this.cdr.detectChanges();
          return;
        }

        this.router.navigate([`/main/${id}`]);
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }
}
