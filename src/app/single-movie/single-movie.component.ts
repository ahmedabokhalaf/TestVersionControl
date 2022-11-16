import { Component, OnInit } from '@angular/core';
import { Imovie } from './movie';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  movie!:Imovie;
  constructor() { }

  ngOnInit(): void {
  }

}
