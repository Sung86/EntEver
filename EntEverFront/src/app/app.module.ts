import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { HeaderComponent } from './frame/header/header.component';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    DiscussionComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponent},
      { path:'signin', component: SigninComponent},
      { path:'signup', component: SignupComponent},
      { path:'overview', component: OverviewComponent},
      { path:'discussion', component: DiscussionComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
