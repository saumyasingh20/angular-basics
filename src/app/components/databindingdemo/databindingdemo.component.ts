import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindingdemo',
  templateUrl: './databindingdemo.component.html',
  styleUrls: ['./databindingdemo.component.css']
})
export class DatabindingdemoComponent implements OnInit {

  principal:number=10000
  roi:number=4
  time:number=1
  si:number=0;

  constructor() { }
  calculateSI(): void {
    this.si = (this.principal*this.roi*this.time)/100
  }

  ngOnInit(): void {
  }

}
