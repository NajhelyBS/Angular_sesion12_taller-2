import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part1Component } from './part1/part1.component';
import { Part5Component } from './part5/part5.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Part3Component } from './part3/part3.component';
import { Part2Component } from './part2/part2.component';
import { Part4Component } from './part4/part4.component';



@NgModule({
  declarations: [
    Part1Component,
    Part5Component,
    Part3Component,
    Part2Component,
    Part4Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    Part1Component,
    Part5Component,
    Part3Component,
    Part2Component,
    Part4Component,
  ]
})
export class BodyModule { }
