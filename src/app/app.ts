import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SafeStorage } from '../core/services/safe-storage';
import { LOCAL_STORAGE } from './shared/constants/local-storage';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatListModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private safeStorage = inject(SafeStorage);
  isLoggedIn$ = this.safeStorage.isLoggedIn$;
  isLoggedIn: boolean | null = false;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() {}

  ngOnInit() {
    const loggedInStatus = this.safeStorage.get(LOCAL_STORAGE.IS_LOGGED_IN);
    this.safeStorage.refreshIsLoggedIn();
    console.log('isLoggedIn$', this.isLoggedIn$);
  }
}
