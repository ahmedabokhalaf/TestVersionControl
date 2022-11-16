import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  tvshows:any[]=[];
  constructor(private tvs:TvService) { }

  ngOnInit(): void {
     this.tvs.getTvShows().subscribe({next:(tvData: { results: any[]; })=>{
       this.tvshows=tvData.results
       
     }})
  }

}
