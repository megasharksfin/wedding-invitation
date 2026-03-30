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
    const requestName = this.loginForm.get('uniqueId')?.value;
    if (!requestName) {
      alert('Please input your name to continue.');
      return;
    }

    this.isSubmitted = true;
    const data = {
      name: requestName.trim(),
      action: 'matchUser',
    }
    this.rsvpService.sheetsPost$(JSON.stringify(data)).subscribe({
      next: (res) => {
        const { result, message, id, name } = res as any;

        if (result === 'error') {
          console.log(message);
          this.isError.set(true);
          this.isSubmitted = false;
          // this.cdr.detectChanges();
          return;
        }

        sessionStorage.setItem('guestName', name.trim());
        this.router.navigate([`/main/${id}`]);
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }
}
