import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './overview/overview.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { HeaderComponent } from './frame/header/header.component';
import { RouterModule } from '@angular/router';
import { HomeMaterialModule } from './home/homematerial.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    DiscussionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeMaterialModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponent},
      { path:'overview', component: OverviewComponent},
      { path:'discussion', component: DiscussionComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
