import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundedComponent } from './page-not-founded/page-not-founded.component';
import { TvComponent } from './tv/tv.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    PageNotFoundedComponent,
    TvComponent,
    SingleMovieComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
