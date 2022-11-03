import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BuscarPeliculasComponent } from './buscar-peliculas/buscar-peliculas.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes:Routes=[
  {path: 'movies', component: HomeComponent},
  {path: 'buscar', component: BuscarPeliculasComponent},
  {path: 'movie/:id', component: MovieDetailComponent},
  {path: '**', redirectTo: 'movies'}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
  ,
  exports: [RouterModule]
})
export class MoviesModuleRouting { }
