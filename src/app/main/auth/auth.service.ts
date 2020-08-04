import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // todo: add userLogIn value to subscribe - BehaviorSubject

  constructor(private router: Router,
              private _af: AngularFireAuth) { }

  redirectIfLogIn(): void {
    this._af.authState.subscribe(res => {
      if (res && res.uid) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

  authLogin(provider) {
    return this._af.signInWithPopup(provider)
      .then((result) => {
        if (result) {
          this.redirectIfLogIn();
        }
      }).catch((error) => {
        console.log(error);
      });
  }
}
