import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './core/modules/routing.module';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './modules/routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DialogBoxService } from './core/services/dialog-box.service';
import { BannerComponent } from './front/components/banner/banner.component';
import { FooterComponent } from './front/components/footer/footer.component';
import { HeaderComponent } from './front/components/header/header.component';
import { MainComponent } from './front/components/main/main.component';
import { NavbarComponent } from './front/components/navbar/navbar.component';
import { MainModule } from './core/modules/main.module';
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
