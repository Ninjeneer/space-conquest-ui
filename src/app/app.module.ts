import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PlanetComponent } from './planet/planet.component';
import { BuildingsComponent } from './buildings/buildings.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlanetComponent,
    BuildingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
