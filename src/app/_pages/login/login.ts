import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../../_interfaces/index';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  constructor (private router: Router)  {}
  loginForm = new FormGroup({
    uniqueId: new FormControl<string>('')
  });
  
  navigateToMain() {
    const id = this.loginForm.get('uniqueId')?.value;
    if (!id) {
      alert('Please input your name to continue.');
      return;
    }
    
    this.router.navigate(['/main/1'])
  }
}
