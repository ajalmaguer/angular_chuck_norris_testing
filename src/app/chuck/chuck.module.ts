import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke/joke.component';
import { JokeService } from './joke.service';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [JokeComponent],
	providers: [JokeService],
	exports: [JokeComponent]
})
export class ChuckModule { }
