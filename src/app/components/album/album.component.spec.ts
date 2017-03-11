/* tslint:disable:no-unused-variable */
import { fakeAsync,async, ComponentFixture, TestBed ,inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpotifyService } from '../../services/spotify.service';

import { AlbumComponent } from './album.component';

import { ActivatedRoute } from '@angular/router';

import  {  Observable  }  from  'rxjs/Observable';
import  'rxjs/add/observable/of';

import { SpotifyServiceStub } from '../test_mocks/spotifyServiceStub';

import  {
    JsonpModule,
    Http,
    ResponseOptions,
    Response
}  from  '@angular/http';


describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  

  beforeEach(async(() => {    

      let activatedRouteStub = {
        params: Observable.of({id: 123})
      };

    let spotifyService = new SpotifyServiceStub();

    TestBed.configureTestingModule({
      declarations: [ AlbumComponent ],
      providers: [{provide:SpotifyService,useValue:spotifyService},
                  {provide:ActivatedRoute,useValue:activatedRouteStub}
                  
      ]
    })
    .compileComponents().catch(error => console.error(error));

  }));

  beforeEach(() => { 

    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    component.album = {};         
    fixture.detectChanges();
  });

  it('should create',fakeAsync(inject([SpotifyService], (service:SpotifyService) => {     
    expect(component).toBeTruthy();
    component.ngOnInit();

  })));

  it('should be true Album',fakeAsync(inject([SpotifyService], (service:SpotifyService) => {     
     expect(component.album.images.length).toBeGreaterThan(0);
     

  })));



});

    


