import { Component, OnInit } from '@angular/core';
import { HeroDTO } from "../interfaces/Hero";

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: HeroDTO[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(result => { this.heroes = result; console.log(result); });
  }

  selectedHero?: HeroDTO;
  onSelectHero = (hero: HeroDTO) => {
    this.selectedHero = hero;
  }

  refresh() {
    this.heroService.getHeroes().subscribe(result => { this.heroes = result; console.log(result); });
  }
}
