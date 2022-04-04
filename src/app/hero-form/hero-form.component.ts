import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from "../interfaces/Hero";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  model: Hero = {
    name: "Bruce",
    lastName: "Wayne",
    age: 43,
    heroName: "Batman",
    imageUrl: "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/n/nuevo_comic_de_batman_basado_en_la_serie_animada.jpg",
    backgroundStory: "There was upon a time...",
    sidekicks: []
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  newHero() {
    this.model = {
      name: "",
      lastName: "",
      age: 43,
      heroName: "",
      imageUrl: "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/n/nuevo_comic_de_batman_basado_en_la_serie_animada.jpg",
      backgroundStory: "",
      sidekicks: []
    };
  }

  onSubmit() {
    console.log("submitted")
    this.heroService.postHero(this.model)
      .subscribe(result => console.log("result: ", result));
  }

}
