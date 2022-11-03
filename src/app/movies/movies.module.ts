import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MoviesModuleRouting } from './movies.routes.module';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { BuscarPeliculasComponent } from './buscar-peliculas/buscar-peliculas.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';



@NgModule({
  declarations: [HomeComponent, BuscarPeliculasComponent, CardMovieComponent, NoimagePipe, MovieDetailComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MoviesModuleRouting,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    
  ],
  exports: [HomeComponent, BuscarPeliculasComponent]
})
export class MoviesModule { }
