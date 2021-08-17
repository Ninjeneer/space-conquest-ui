import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResourceCardComponent } from './resource-card/resource-card.component';
import { ResourcesComponent } from './resources.component';

@NgModule({
  declarations: [
    ResourcesComponent,
    ResourceCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResourcesModule { }
