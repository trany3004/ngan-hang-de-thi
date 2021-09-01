
import { LoginComponent } from './admin/login/login.component';
import { ResultComponent } from './result/result.component';
import { StarttestComponent } from './starttest/starttest.component';
import { LuyentapComponent } from './luyentap/luyentap.component';
import { DetailComponent } from './detail/detail.component';
import { OntapComponent } from './ontap/ontap.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { CivicComponent } from './civic/civic.component';
import { GeographyComponent } from './geography/geography.component';
import { HistoryComponent } from './history/history.component';
import { BiologicalComponent } from './biological/biological.component';
import { EnglishComponent } from './english/english.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { PhysicsComponent } from './physics/physics.component';
import { MathComponent } from './math/math.component';
import { ContactComponent } from './contact/contact.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { PhuHuynhHocSinhComponent } from './phu-huynh-hoc-sinh/phu-huynh-hoc-sinh.component';
import { BanGiamHieuComponent } from './ban-giam-hieu/ban-giam-hieu.component';
import { ThayCoGiaoComponent } from './thay-co-giao/thay-co-giao.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { HocsinhComponent } from './hocsinh/hocsinh.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path: 'welcome', component: WellcomeComponent},
  {path: 'hocsinh', loadChildren: () => import('./hocsinh/hocsinh.module').then(m => m.HocSinhModule)},
  {path: 'thay-co-giao', component: ThayCoGiaoComponent},
  {path: 'ban-giam-hieu', component: BanGiamHieuComponent},
  {path: 'phu-huynh-hoc-sinh', component: PhuHuynhHocSinhComponent},
  {path: 'gioi-thieu', component: GioiThieuComponent},
  {path: 'lien-he', component: ContactComponent},
  {path: 'toan-hoc', component: MathComponent},
  {path: 'toan-hoc/on-tap/:ontapId', component: OntapComponent },
  {path: 'vat-ly', component: PhysicsComponent},
  {path: 'hoa-hoc', component: ChemistryComponent},
  {path: 'tieng-anh', component: EnglishComponent},
  {path: 'sinh-hoc', component: BiologicalComponent},
  {path: 'lich-su', component: HistoryComponent},
  {path: 'dia-ly', component: GeographyComponent},
  {path: 'Giao-duc-cong-dan', component: CivicComponent},
  {path: 'dang-ky', component: SignupComponent},
  {path: 'dang-nhap', component: SigninComponent},
  {path: 'toan-hoc', component:MathComponent},
  {path: 'ket-qua', component:ResultComponent},
  {path: 'admin/login', component:LoginComponent},
  {path: 'detail/:detailId', component: DetailComponent },
  // {path: 'ontap/:ontapId', component: OntapComponent },
  {path: 'start-test/:starttestId', component: StarttestComponent },
  {path: 'luyen-tap/:levelId', component: LuyentapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
