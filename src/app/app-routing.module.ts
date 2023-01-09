import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Part1Component } from './body/part1/part1.component';
import { Part2Component } from './body/part2/part2.component';
import { Part3Component } from './body/part3/part3.component';
import { Part4Component } from './body/part4/part4.component';
import { Part5Component } from './body/part5/part5.component';
import { NavigationComponent } from './web/navigation/navigation.component';

const routes: Routes = [
  {path:"", component: Part1Component},
  {path:"presentacion", component:Part1Component},
  {path:"data", component: Part2Component},
  {path:"education", component:Part3Component},
  {path:"objective", component:Part4Component},
  {path:"contact", component:Part5Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
