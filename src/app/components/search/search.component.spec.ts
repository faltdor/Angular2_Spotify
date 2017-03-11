/* tslint:disable:no-unused-variable */
import { fakeAsync,async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { SearchComponent } from './search.component';

import { SpotifyService } from '../../services/spotify.service';
import  {  Observable  }  from  'rxjs/Observable';
import  'rxjs/add/observable/of';
import { SpotifyServiceStub } from '../test_mocks/spotifyServiceStub';

import { FormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule } from '../../app.routes';
import { routingComponents } from '../../app.routes';

import { APP_BASE_HREF } from '@angular/common';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let spotifyService = new SpotifyServiceStub();
  
   let activatedRouteStub = {
    params: Observable.of({id: 123})
  };

  let routerStub = {
    navigate: jasmine.createSpy('navigate')
  };    


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,RouterTestingModule.withRoutes([{path: '',   redirectTo: '/search', pathMatch: 'full'}])

      ],
      declarations: [ SearchComponent ,routingComponents ],
      providers : [{provide:SpotifyService,useValue:spotifyService},
                  {provide:ActivatedRoute,useValue:activatedRouteStub},
                  {provide: APP_BASE_HREF, useValue: '/'},
                  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

 it('should create', fakeAsync(inject([SpotifyService], (service:SpotifyService) => {
      expect(component).toBeTruthy();
  })));
});
