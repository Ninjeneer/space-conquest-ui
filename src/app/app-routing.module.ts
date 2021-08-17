import { RouterModule, Routes } from '@angular/router';

import { BuildingsComponent } from './buildings/buildings.component';
import { NgModule } from '@angular/core';
import { PlanetComponent } from './planet/planet.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: 'planet', component: PlanetComponent },
  { path: 'buildings', component: BuildingsComponent },
  { path: 'resources', component: ResourcesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
