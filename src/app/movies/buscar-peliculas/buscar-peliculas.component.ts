import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-buscar-peliculas',
  templateUrl: './buscar-peliculas.component.html',
  styleUrls: ['./buscar-peliculas.component.css']
})
export class BuscarPeliculasComponent implements OnInit {
  termino = 'saw'
  pelis: any[] = [];
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.movieService.buscarPeli(this.termino)
    .subscribe(
      (data: any) => {
        console.log(data)
        this.pelis = data.results
      }
    )
  }

}
