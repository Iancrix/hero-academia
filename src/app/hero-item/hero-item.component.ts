import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../hero.service';
import { HeroDTO } from "../interfaces/Hero";

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {
  @Input() hero?: HeroDTO;
  @Input() selectedHero?: HeroDTO;
  @Output() selected = new EventEmitter();
  @Output() refresh = new EventEmitter();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

  delete(hero: HeroDTO): void {
    console.log("Deleting hero with id " + hero.id)
    this.heroService.deleteHero(hero.id).subscribe(result => { console.group(result); this.refresh.emit(); });
  }
}
