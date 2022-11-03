import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { MoviesModule } from './movies/movies.module';
// import { MoviesModuleRouting } from './movies/movies.routes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    MoviesModule,
    // MoviesModuleRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
