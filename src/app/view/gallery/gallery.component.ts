import { Component, OnInit } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(){}

  ngOnInit(): void{
    myTest();
  }
}