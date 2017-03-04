import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../../services/spotify.service';

import { Artist } from '../../model/artist';
import { Album } from '../../model/album';



@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id:string;
  album: Album[];	

  constructor(private _spotifyService: SpotifyService,
  			  private _activatedRoute:ActivatedRoute ) { }


    ngOnInit() {
  	this._activatedRoute.params
  			.map(params => params['id'])
  			.subscribe((id) => {
  				this._spotifyService.getAlbum(id)
  						.subscribe(album => {
  							this.album = album;
  						})	

          

  			})

  }

}
