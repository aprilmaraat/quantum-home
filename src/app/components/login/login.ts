import { ChangeDetectionStrategy, Component, inject, OnChanges, OnDestroy, OnInit, signal, SimpleChanges } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

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

  constructor() {}

  showHidePassword(event: MouseEvent) {
    this.hidePassword.set(!this.hidePassword());
    event.stopPropagation();
  }

  submitForm(event: MouseEvent) {
    if (this.validateForm.valid) {
      console.log('Form Submitted!', this.validateForm.value);
    } else {
      console.error('Form is invalid');
    }
    event.stopPropagation();
  }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }

  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
