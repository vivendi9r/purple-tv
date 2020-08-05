import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../main/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: firebase.User;

  constructor(private _af: AngularFireAuth,
              private _authService: AuthService) {
  }

  ngOnInit(): void {
    this._authService.currentUserSubject.subscribe(currentUser => {
        this.currentUser = currentUser;
    });
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this._af.signOut();
  }
}
