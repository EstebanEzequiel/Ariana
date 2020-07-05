import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './view/gallery/gallery.component';
import { PoemComponent } from './view/poem/poem.component';
import { Foto1Component } from './view/foto1/foto1.component';
import { Foto2Component } from './view/foto2/foto2.component';
import { Foto3Component } from './view/foto3/foto3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
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
