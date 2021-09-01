import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HocsinhComponent } from './hocsinh.component';

const routes: Routes = [
  { path: '', component: HocsinhComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [HocsinhComponent]
})
export class HocSinhModule { }
