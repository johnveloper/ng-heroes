import {
  Component, // import the Component symbol to annotate the component class with @Component
  OnInit // lifecycle hook, called shortly after creating a component, good place to put initialization logic
} from '@angular/core';

import Hero from './Hero';
import HEROES from './HEROES';



// @Component is a decorator fuction that specifies the Angular metadata for the component
@Component({
  selector: 'app-heroes', // Component's CSS element selector
  templateUrl: './heroes.component.html', // Location of the component template file
  styleUrls: ['./heroes.component.sass'] // Location of styles for this component (scoped, private)
})



export class HeroesComponent implements OnInit {

  // properties
  hero: Hero = {
    id: 0,
    name: 'Windstorm'
  }

  heroes: Hero[] = HEROES;

  constructor() {}
  ngOnInit() {} // lifecycle hook, called shortly after creating a component, good place to put initialization logic
}