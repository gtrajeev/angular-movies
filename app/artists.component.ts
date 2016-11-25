import {Component} from 'angular2/core'
import {ArtistService} from './artist.service'

@Component ({
	selector: 'artists',
	template: `
		<h2>Artists</h2>
		{{ title }}
		<ul>
			<li *ngFor="#artist of artists">
				{{artist}}
			</li>
		</ul>
		`,
	providers: [ArtistService]
})

export class ArtistsComponent {
	title = 'The title of artists page';
	artists;

	constructor (artistService: ArtistService) {
		this.artists = artistService.getArtists();
	}
}