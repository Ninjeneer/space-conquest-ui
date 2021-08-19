import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlanetComponent } from './planet.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetComponent
  }
];

@NgModule({
  declarations: [
    PlanetComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlanetModule { }
