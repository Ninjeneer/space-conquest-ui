import { RouterModule, Routes } from '@angular/router';

import { BuildingsComponent } from './buildings/buildings.component';
import { NgModule } from '@angular/core';
import { PlanetComponent } from './planet/planet.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  { path: 'planet', loadChildren: () => import('./planet/planet.module').then(m => m.PlanetModule) },
  { path: 'buildings', loadChildren: () => import('./buildings/buildings.module').then(m => m.BuildingsModule) },
  { path: 'resources', loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
