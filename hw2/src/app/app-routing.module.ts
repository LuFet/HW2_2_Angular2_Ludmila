import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTableComponent } from './my-table/my-table.component';
import { FormsModule } from "@angular/forms"; // для ngModel

const routes: Routes = [
  {path:'my-table', component: MyTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
