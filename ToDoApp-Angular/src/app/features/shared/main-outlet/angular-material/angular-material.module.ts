import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialComponent } from './angular-material.component';
import { MatSliderModule } from "@angular/material/slider";

const matModules = [
  MatSliderModule,
]

@NgModule({
  declarations: [
    AngularMaterialComponent,
  ],
  imports: [
    CommonModule,
    ...matModules
  ],
  exports: [
    ...matModules
  ]
})
export class AngularMaterialModule { }
