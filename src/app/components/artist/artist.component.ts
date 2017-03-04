import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../model/artist';
import { Album } from '../../model/album';



@Component({
  moduleId:module.id,
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id:string;
  artist: Artist[];
  albums: Album[];	

  constructor(private _spotifyService: SpotifyService,
  			  private _activatedRoute:ActivatedRoute ) { }



  ngOnInit() {
  	this._activatedRoute.params
  			.map(params => params['id'])
  			.subscribe((id) => {
  				this._spotifyService.getArtist(id)
  						.subscribe(artist => {
  							this.artist = artist;
  						})		
  			})
  }

}
