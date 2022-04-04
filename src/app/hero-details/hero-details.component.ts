import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { HeroDTO, Hero, HeroPatchDTO } from "../interfaces/Hero";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero?: HeroDTO;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit() {
    console.log("submitting...")

    if (this.hero) {
      let heroBody: HeroPatchDTO = {
        name: this.hero.name,
        imageUrl: this.hero.imageUrl,
        backgroundStory: this.hero.backgroundStory
      }

      this.heroService.updateHero(this.hero.id, heroBody).subscribe(result => console.log(result));
    }

  }
}
