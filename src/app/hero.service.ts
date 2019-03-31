import { Injectable } from '@angular/core';
import Hero from './heroes/Hero';
import HEROES from './heroes/HEROES';



@Injectable({
  providedIn: 'root'
})



export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() {}

}