import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  obtenerCatelera(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=c230cca109e98a1004c67434d4cbbd25')
  }

  buscarPeli(busqueda:any){
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=c230cca109e98a1004c67434d4cbbd25&query=${busqueda}&page=1&include_adult=false`)
  }

  getMovie(id:number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c230cca109e98a1004c67434d4cbbd25`)
  }
}
