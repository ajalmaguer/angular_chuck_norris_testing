import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JokeService {

	constructor(private http: Http) { }

	getJoke() {
		return this.http.get('http://api.icndb.com/jokes/random')
			.map(res => res.json().value.joke);
	}


}
