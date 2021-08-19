import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MathjaxModule } from 'mathjax-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { HocsinhComponent } from './hocsinh/hocsinh.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    WellcomeComponent,
    HocsinhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MathjaxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
