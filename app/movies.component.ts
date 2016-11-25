import {Component} from 'angular2/core'
import {MovieService} from './movie.service'
@Component({
	selector: 'movies',
	template: `
			<h2>Movies</h2>
			{{ title }}
			<ul>
				<li *ngFor="#movie of movies">
					{{ movie }}
				</li>
			</ul> `,
	providers: [MovieService]
})

export class MoviesComponent {
	title = "The title of movies page";
	movies;

	constructor (movieService: MovieService) {
		this.movies = movieService.getMovies();
	}
}