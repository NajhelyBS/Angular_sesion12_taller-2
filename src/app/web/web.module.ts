import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { BodyModule } from '../body/body.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BodyModule,
  ],
  exports: [
    BodyModule,
  ]
})
export class WebModule { }
