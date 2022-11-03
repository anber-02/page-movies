import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieServices: MoviesService) { }

  pelis: any[] = []
  ngOnInit(): void {
    this.movieServices.obtenerCatelera()
      .subscribe(
        (data: any) => {
          console.log(data.results)
          this.pelis = data.results
        },
        err => console.log(err)
      )
  }


}
