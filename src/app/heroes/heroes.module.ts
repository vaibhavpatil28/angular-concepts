import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesService } from './shared/heroes.service';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';


@NgModule({
  declarations: [HeroesComponent, HeroComponent, HeroesListComponent, HeroDetailsComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  providers:[HeroesService]
})
export class HeroesModule { }
