import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';




const appRoutes: Routes = [
    { path: '',   redirectTo: '/search', pathMatch: 'full' },
	{path:'about',component:AboutComponent},
	{path:'search',component:SearchComponent},
	{path:'artist/:id',component:ArtistComponent},
	{path:'album/:id',component:AlbumComponent}

	
//	{ path: '**', component: 'PageNotFoundComponent' }
];


@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
	
})

export class AppRoutingModule{}
export const routingComponents = [AboutComponent,SearchComponent,ArtistComponent]
