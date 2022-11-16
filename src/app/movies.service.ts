import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  getMovies( pageNumber:number=1):any {
    // return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=5caa732474e64cf609bba25ff127d08e&language=en-US&page=${pageNumber}`);
  }
}
