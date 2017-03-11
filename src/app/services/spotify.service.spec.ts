/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpotifyService } from './spotify.service';

import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import {HttpModule,
		XHRBackend,
		ResponseOptions,
		Response,
		RequestMethod
		 } from '@angular/http';

import	{
		MockBackend,

		MockConnection
}	from	'@angular/http/testing/mock_backend';

import { SpotifyServiceStub } from '../components/test_mocks/spotifyServiceStub';


describe('SpotifyService', () => {

  let spotifyService = new SpotifyServiceStub();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:	[HttpModule],		
      providers: [SpotifyService,{
				provide:	XHRBackend,
				useClass:	MockBackend
			},
			{provide:SpotifyService,useValue:spotifyService}],

    });
  });

  it('should ...', inject([SpotifyService], (service: SpotifyService) => {
    expect(service).toBeTruthy();
  }));
});
