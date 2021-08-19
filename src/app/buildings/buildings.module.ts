import { RouterModule, Routes } from '@angular/router';

import { BuildingsComponent } from './buildings.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: BuildingsComponent
  }
];

@NgModule({
  declarations: [
    BuildingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BuildingsModule { }
