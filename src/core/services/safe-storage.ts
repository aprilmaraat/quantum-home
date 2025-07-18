import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SafeStorage {
  private isBrowser: boolean;

  constructor() {
    this.isBrowser = typeof window !== 'undefined' && !!window.localStorage;
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
}
