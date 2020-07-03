import { Component, OnInit } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'foto1',
  templateUrl: './foto1.component.html',
  styleUrls: ['./foto1.component.css']
})
export class Foto1Component implements OnInit {

  constructor(){}
  
  ngOnInit(): void {
    myTest();
  }

}
