import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parenttwo',
  templateUrl: './parenttwo.component.html',
  styleUrls: ['./parenttwo.component.css']
})
export class ParenttwoComponent implements OnInit {

  constructor() { }

  message:string='';

  receiveMessage(event:any){
    this.message=event

  }

  ngOnInit(): void {
  }

}
