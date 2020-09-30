import { Injectable } from '@angular/core';
import { SessionStore } from './session.store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private sessionStore: SessionStore,
              private http:HttpClient) { }
  async updateUserName(newName: string) {
    this.sessionStore.setLoading(true);
    try {
      await this.http;
    } catch(error) {
      this.sessionStore.setError(error);
    }
    this.sessionStore.update(state => ({
      name: newName
    }));
    this.sessionStore.setLoading(false);
    this.sessionStore.destroy();

  }
}
