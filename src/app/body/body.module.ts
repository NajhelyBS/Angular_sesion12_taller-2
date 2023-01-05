import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part1Component } from './part1/part1.component';
import { Part5Component } from './part5/part5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Part1Component,
    Part5Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    Part1Component,
  ]
})
export class BodyModule { }
