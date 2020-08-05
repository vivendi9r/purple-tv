import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _af: AngularFireAuth,
              private _authService: AuthService) {}

  ngOnInit() {
    this._authService.setCurrentUser();
  }

  loginWithFacebook() {
    return this._authService.authLogin(new auth.FacebookAuthProvider());
  }

  loginWithGoogle() {
    return this._authService.authLogin(new firebase.auth.GoogleAuthProvider());
    // this._af.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    // this._af.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
