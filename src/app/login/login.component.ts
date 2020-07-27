import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _af: AngularFireAuth,
    public afAuth: AngularFireAuth) {

    _af.authState.subscribe(res => {
      console.log(res);
      if (res && res.uid) {
        console.log('log in as: ', res.displayName ? res.displayName : res.email ? res.email : 'unknown user');
        // todo: add redirect to homepage component
      } else {
        console.log('log out');
      }
    });
  }

  ngOnInit() {
  }

  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!')
    }).catch((error) => {
        console.log(error);
    });
  }

  loginWithGoogle() {
    this._af.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    // this._af.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logOut() {
    this._af.signOut();
  }
}
