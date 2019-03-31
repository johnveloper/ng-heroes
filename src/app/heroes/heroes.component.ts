import {
  Component, // import the Component symbol to annotate the component class with @Component
  OnInit // lifecycle hook, called shortly after creating a component, good place to put initialization logic
} from '@angular/core';

import Hero from './Hero';
import { HeroService } from '../hero.service';



// @Component is a decorator fuction that specifies the Angular metadata for the component
@Component({
  selector: 'app-heroes', // Component's CSS element selector
  templateUrl: './heroes.component.html', // Location of the component template file
  styleUrls: ['./heroes.component.sass'] // Location of styles for this component (scoped, private)
})



export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  heroes: Hero[];
  selectedHero: Hero;  

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  handleHeroClick(hero: Hero) {
    this.selectedHero = hero;
  }
}