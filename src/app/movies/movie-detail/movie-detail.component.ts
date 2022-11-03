import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MoviesModule } from '../movies.module';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  peli:any = {}

  constructor(private activatedRouter: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((param:any) => {
      console.log('params', param)
      this.moviesService.getMovie(param.id).subscribe((data:any) => {
        this.peli = data
        console.log(data)
      })
    })
  }

  

}
