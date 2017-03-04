import { Component, OnInit } from '@angular/core';

import { routingComponents } from '../../app.routes';


import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../model/artist';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr : string;
  serchResult : Artist[];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  searchMusic():void{
  	this.spotifyService.searchMusic(this.searchStr).subscribe(data => {
     		 console.log(data.artists.items); 
         this.serchResult = data.artists.items;
  	})
  }

}
