import { FooterComponent } from './footer/footer.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { HeaderComponent } from './header/header.component';
import { HocsinhComponent } from './hocsinh/hocsinh.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path: 'welcome', component: WellcomeComponent},
  {path: 'hocsinh', component: HocsinhComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
