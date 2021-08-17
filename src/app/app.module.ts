import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BuildingsComponent } from './buildings/buildings.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { PlanetComponent } from './planet/planet.component';
import { ResourceCardComponent } from './resources/resource-card/resource-card.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourcesModule } from './resources/resources.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlanetComponent,
    BuildingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ResourcesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
