import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { routingComponents } from '../../app.routes';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


import { SpotifyService } from '../../services/spotify.service';
import { SpotifyServiceStub } from '../test_mocks/spotifyServiceStub';


import { Artist } from '../../model/artist';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    
  serchResult : Observable<Array<any>>;
  term = new FormControl();

  private searchTerms : Subject<string> = new Subject<string>();

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
      this.serchResult = this.searchTerms
                         .debounceTime(300)
                         .distinctUntilChanged()
                          .switchMap(term => this.spotifyService.searchMusic(term))                             
                          .catch(error => {
                            // TODO: add real error handling
                            console.log(error);
                            return Observable.of<any[]>([]);
                          });

  }

  searchMusic(term:string):void{
    
     if(!term.trim()) return;

     this.searchTerms.next(term);

  }

  anyFun(data:string){
    console.log(data);
  }

}
