import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  setSessionStorage({ key, value }: { key: string; value: any[] }): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSessionStorage(key: string): string | null {
    return sessionStorage.getItem(key);
  }
}
