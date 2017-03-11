import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl: string;
  private albumsUrl : string;
  private albumUrl : string;
 
  constructor(private _http:Http) { 
    
  }

  searchMusic(str:string,type="artist"){
  	this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
  	console.log(this.searchUrl);

    return this._http.get(this.searchUrl)
  					  .map(res => res.json().artists.items);
    
  }

   getArtist(id:string){     
  	this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
    console.log(this.artistUrl);
  	return this._http.get(this.artistUrl)
  					  .map(res => res.json());
  }

   getAlbums(artistId:string){     
    this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
    console.log(this.albumsUrl);
    return this._http.get(this.albumsUrl)
              .map(res => res.json());
  }
   getAlbum(albumId:string){     
    this.albumsUrl = 'https://api.spotify.com/v1/albums/'+albumId;
    return this._http.get(this.albumsUrl)
              .map(res => res.json());
  }

}

