import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private http = inject(HttpClient);
  public isloggedIn = false;


  login(data: { username: string; Password: string }) {
    return this.http.post('https://fakestoreapi.com/auth/login', data);
  }

}
