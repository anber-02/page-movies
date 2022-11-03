import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  // indicamos que solo necesitamos una pelicuka
  transform(peli: any): string {
    // para indicar una image por default en caso de no contar con una
    if(!peli.backdrop_path){
      return '../../../assets/994164.jpg'
    }
    return 'https://image.tmdb.org/t/p/w500' + peli.backdrop_path
  }

}
