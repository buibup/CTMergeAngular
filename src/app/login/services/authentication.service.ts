import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from './User.model';

@Injectable()
export class AuthenticationService {

  currentUser: User;

   url = 'http://10.105.10.114/CTMergeAPI/api/v1/';
  // url = 'http://localhost:31582/api/v1/';

  constructor(private http: Http) {
  }

  isUserAuthen(username: string, password: string): Observable<boolean> {
    return this.http.get(this.url + 'UserAuthen?username=' + username + '&password=' + encodeURIComponent(password))
                      .map(result => (result.text() === 'true'));
  }

  getUserAuthen(username: string, password: string): Observable<User> {
    return this.http.get(this.url + 'UserResult?username=' + username + '&password=' + encodeURIComponent(password))
                      .map((result: Response) => {
                        return result.json() as User;
                      });
  }

  getUserLogin() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  setUserLogin(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  setUserLogout() {
    localStorage.setItem('currentUser', JSON.stringify(new User()));
  }

}
