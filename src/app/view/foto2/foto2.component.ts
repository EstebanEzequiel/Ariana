import { Component, OnInit } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'foto2',
  templateUrl: './foto2.component.html',
  styleUrls: ['./foto2.component.css']
})
export class Foto2Component implements OnInit {

  constructor(){}

  ngOnInit(): void {
    myTest();
  }

}
