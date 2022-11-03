import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  @Input() pelisCard: any[] = [] 
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  verMas(id:number){
    this.route.navigate(['/movie',id])
  }

}
