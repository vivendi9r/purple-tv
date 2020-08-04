import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _af: AngularFireAuth,
              private router: Router) {}

  ngOnInit() {
    this.redirectIfLogIn();
  }

  redirectIfLogIn(): void {
    this._af.authState.subscribe(res => {
      if (res && res.uid) {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

  loginWithFacebook() {
    return this.authLogin(new auth.FacebookAuthProvider());
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

  loginWithGoogle() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
    // this._af.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    // this._af.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
