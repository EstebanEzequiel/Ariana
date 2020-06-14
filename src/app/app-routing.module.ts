import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './view/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = 
[
  { path:'home', component: HomeComponent },
  { path:'', component: HomeComponent },
  { path:'galeria', component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
