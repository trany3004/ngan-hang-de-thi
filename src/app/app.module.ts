import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { ThayCoGiaoComponent } from './thay-co-giao/thay-co-giao.component';
import { BanGiamHieuComponent } from './ban-giam-hieu/ban-giam-hieu.component';
import { PhuHuynhHocSinhComponent } from './phu-huynh-hoc-sinh/phu-huynh-hoc-sinh.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { ContactComponent } from './contact/contact.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { MathComponent } from './math/math.component';
import { PhysicsComponent } from './physics/physics.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { BiologicalComponent } from './biological/biological.component';
import { EnglishComponent } from './english/english.component';
import { HistoryComponent } from './history/history.component';
import { GeographyComponent } from './geography/geography.component';
import { CivicComponent } from './civic/civic.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { OntapComponent } from './ontap/ontap.component';
import { DetailComponent } from './detail/detail.component';
import { LuyentapComponent } from './luyentap/luyentap.component';
import { StarttestComponent } from './starttest/starttest.component';
import { ResultComponent } from './result/result.component';
import { LoginComponent } from './admin/login/login.component';
import { HistorydetailComponent } from './historydetail/historydetail.component';
import { HistoryluyentapComponent } from './historyluyentap/historyluyentap.component';
import { MathjaxComponent } from './mathjax/mathjax.component';
import { SinhhocontapComponent } from './sinhhocontap/sinhhocontap.component';
import { MathModule } from './math/math.module';
import {HttpClientModule} from '@angular/common/http';
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { TructuyenComponent } from './tructuyen/tructuyen.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    WellcomeComponent,
    ThayCoGiaoComponent,
    BanGiamHieuComponent,
    PhuHuynhHocSinhComponent,
    GioiThieuComponent,
    ContactComponent,
    MathComponent,
    PhysicsComponent,
    ChemistryComponent,
    BiologicalComponent,
    EnglishComponent,
    HistoryComponent,
    GeographyComponent,
    CivicComponent,
    SignupComponent,
    SigninComponent,
    OntapComponent,
    DetailComponent,
    LuyentapComponent,
    StarttestComponent,
    ResultComponent,
    LoginComponent,
    HistorydetailComponent,
    HistoryluyentapComponent,
    MathjaxComponent,
    SinhhocontapComponent,
    TructuyenComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    HttpClientModule,
    MatRadioModule,
    MatCheckboxModule,
    MathModule.forRoot(),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    // MathjaxModule.forRoot(

    // )
    // KatexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
