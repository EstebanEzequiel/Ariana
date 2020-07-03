import { Component, OnInit } from '@angular/core';
declare const myTest: any;

@Component({
  selector: 'foto3',
  templateUrl: './foto3.component.html',
  styleUrls: ['./foto3.component.css']
})
export class Foto3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    myTest();
  }

}
