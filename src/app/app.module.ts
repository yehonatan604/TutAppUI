import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './modules/routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainComponent } from './main/main.component';
import { MainModule } from './modules/main.module';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './main/banner/banner.component';
import { DialogBoxService } from './services/dialog-box.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RoutingModule.forRoot,
    FormsModule,
    MainModule,
  ],
  providers: [DialogBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
