/* tslint:disable:no-unused-variable */
import { fakeAsync,async, ComponentFixture, TestBed ,inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArtistComponent } from './artist.component';

import { SpotifyService } from '../../services/spotify.service';
import  {  Observable  }  from  'rxjs/Observable';
import  'rxjs/add/observable/of';

import { SpotifyServiceStub } from '../test_mocks/spotifyServiceStub';

import { ActivatedRoute } from '@angular/router';

import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';



describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;


  beforeEach(async(() => {
    let activatedRouteStub = {
        params: Observable.of({id: 123})
      };

    let spotifyService = new SpotifyServiceStub();



    TestBed.configureTestingModule({
        imports: [RouterModule.forRoot([])],   
      declarations: [ ArtistComponent ],
      providers:[{provide:SpotifyService,useValue:spotifyService},
                  {provide:ActivatedRoute,useValue:activatedRouteStub},
                  {provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents().catch(error => console.error(error));

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', fakeAsync(inject([SpotifyService], (service:SpotifyService) => {     
     component.ngOnInit();

    expect(component).toBeTruthy();
  })));
});
