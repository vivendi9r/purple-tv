import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _af: AngularFireAuth,
              private router: Router) { }

  ngOnInit(): void {
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

}
