import { ChangeDetectionStrategy, Component, inject, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SafeStorage } from '../../../core/services/safe-storage';
import { LOCAL_STORAGE } from '../../shared/constants/local-storage';
import { Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login implements OnInit{
  private formBuilder = inject(UntypedFormBuilder);
  title = 'Quantum Home';
  hidePassword = signal(true);
  validateForm!: UntypedFormGroup;

  constructor(private router: Router, private safeStorage: SafeStorage) {
    let isLoggedIn = this.safeStorage.get(LOCAL_STORAGE.IS_LOGGED_IN);
    if( isLoggedIn === 'true' && isLoggedIn !== null) {
      console.log('Login: User is already logged in, redirecting to dashboard');
      this.router.navigate(['/dashboard'], {});
    }
  }

  showHidePassword(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }

  submitForm(event: MouseEvent) {
    if (this.validateForm.valid) {
      this.safeStorage.set(LOCAL_STORAGE.IS_LOGGED_IN, true);
      this.safeStorage.set(LOCAL_STORAGE.SESSION_EXPIRY_DATE, new Date(Date.now() + 60 * 60 * 1000)); // 1 hour
      this.safeStorage.set(LOCAL_STORAGE.RECENT_USER, this.validateForm.value.username);
      this.safeStorage.refreshValues();
      this.router.navigate(['/dashboard']);
    } else {
      console.error('Form is invalid');
    }
    event.stopPropagation();
  }

  ngOnInit(): void {this.validateForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
