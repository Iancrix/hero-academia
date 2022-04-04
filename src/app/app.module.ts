import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroItemComponent } from './hero-item/hero-item.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { gteValidatorDirective } from './validators/gte.validator';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroItemComponent,
    HeroFormComponent,
    HeroDetailsComponent,
    gteValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
