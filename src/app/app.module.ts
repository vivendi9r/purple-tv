import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { LoginComponent } from './main/auth/login/login.component';
import { environment } from '../environments/environment';
import { RegistrationComponent } from './main/auth/registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomepageComponent } from './main/homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { ContactComponent } from './main/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    RegistrationComponent,
    ContactComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomepageComponent },
      { path: 'zaloguj', component: LoginComponent },
      { path: 'rejestracja', component: RegistrationComponent },
      { path: 'tv', component: HomepageComponent },
      { path: 'blog', component: HomepageComponent },
      { path: 'kontakt', component: ContactComponent },
      { path: 'o-nas', component: AboutUsComponent },
      { path: '**', component: HomepageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
