import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { BodyModule } from '../body/body.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    BodyModule,    
    FormsModule, 
    AppRoutingModule,
    
  ],
  exports: [
    NavigationComponent,
  ]
})
export class WebModule { }
