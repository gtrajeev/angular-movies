import {Component} from 'angular2/core';
import {MoviesComponent} from './movies.component';
import {ArtistsComponent} from './artists.component';
import {LanguagesComponent} from './languages.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello Angular</h1>
    	<movies></movies>
    	<artists></artists>
    	<languages>/<languages>
    	`,
    directives: [ MoviesComponent, ArtistsComponent, LanguagesComponent ]
})
export class AppComponent { }