import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE } from '../../app/shared/constants/local-storage';

@Injectable({
  providedIn: 'root'
})
export class SafeStorage {
  private isBrowser: boolean;
  private isLoggedIn = new BehaviorSubject<boolean>(this.get(LOCAL_STORAGE.IS_LOGGED_IN) ?? false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor() {
    this.isBrowser = typeof window !== 'undefined' && !!window.localStorage;
    this.refreshValues();
  }

  set<T>(key: string, value: T): void {
    if (this.isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  get<T>(key: string): T | null {
    if (this.isBrowser) {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) as T : null;
    }
    return null;
  }

  remove(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (this.isBrowser) {
      localStorage.clear();
    }
  }

  refreshValues(): void {
    const storedVal = this.get(LOCAL_STORAGE.IS_LOGGED_IN);
    this.set(LOCAL_STORAGE.IS_LOGGED_IN, storedVal);
    const newVal = typeof storedVal === 'boolean' ? storedVal : false;
    this.isLoggedIn.next(newVal);
  }
}
