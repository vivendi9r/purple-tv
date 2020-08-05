import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserSubject: BehaviorSubject<firebase.User>;
  currentUser: Observable<firebase.User>;

  constructor(private router: Router,
              private _af: AngularFireAuth) {
    this.currentUserSubject = new BehaviorSubject<firebase.User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): firebase.User {
  //   console.log('this.currentUserSubject: ', this.currentUserSubject);
  //   console.log('this.currentUserSubject.value: ', this.currentUserSubject.value);
  //   return this.currentUserSubject.value;
  // }

  setCurrentUser(): void {
    this._af.authState.subscribe(user => {
      if (user && user.uid) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        this.router.navigateByUrl('/');
      } else {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        this.router.navigateByUrl('/zaloguj');
      }
    });
  }

  authLogin(provider) {
    return this._af.signInWithPopup(provider)
      .then((result) => {
        if (result) {
          this.setCurrentUser();
        }
      }).catch((error) => {
        console.log(error);
      });
  }
}
