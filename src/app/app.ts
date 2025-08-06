import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SafeStorage } from '../core/services/safe-storage';
import { LOCAL_STORAGE } from './shared/constants/local-storage';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private safeStorage = inject(SafeStorage);
  isLoggedIn$ = this.safeStorage.isLoggedIn$;
  menuItemLabels: { label: string; icon: string }[] = [
    { label: 'Dashboard', icon: 'dashboard' },
    { label: 'Settings', icon: 'build' },
    { label: 'Profile', icon: 'account_box' },
    { label: 'Help', icon: 'help' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  logout() {
    this.safeStorage.set(LOCAL_STORAGE.IS_LOGGED_IN, false);
    this.safeStorage.refreshValues();
    this.router.navigate(['/login']);
  }
}
