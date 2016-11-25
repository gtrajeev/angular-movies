import {Component} from 'angular2/core'
import {LanguageService} from './language.service'
@Component({
	selector: 'languages',
	template: `<h2>Languages</h2>
			   <ul>
			   	<li *ngFor="#language of languages">
			   		{{ language }}
			   	</li>
			   </ul>
				`,
	providers: [LanguageService]
})

export class LanguagesComponent{
	title = 'Title page of languages';
	languages;

	constructor(languageService: LanguageService) {
		this.languages = languageService.getLanguages();
	}
}