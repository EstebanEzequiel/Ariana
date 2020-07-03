import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WindowComponent } from './view/window/window.component';
import { CarouselComponent } from './view/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';
import { PoemComponent } from './view/poem/poem.component';
import { Foto1Component } from './view/foto1/foto1.component';
import { Foto2Component } from './view/foto2/foto2.component';
import { Foto3Component } from './view/foto3/foto3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    GalleryComponent,
    NavbarComponent,
    WindowComponent,
    CarouselComponent,
    HomeComponent,
    PoemComponent,
    Foto1Component,
    Foto2Component,
    Foto3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
