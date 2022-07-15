import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatypes',
  templateUrl: './datatypes.component.html',
  styleUrls: ['./datatypes.component.css']
})
export class DatatypesComponent implements OnInit {

  course:string = "Full Stack Web Development";
  duration:number | undefined;
  areUTrainee:boolean=true;

  courseContent: string[] | undefined;
  random:any[]|undefined;
  myTuple:[string,number,boolean] | undefined;

  constructor() { 
    console.log("datattype constructor");
    this.duration=5;
  }

  emp={
    code:1,
    name:"rahul",
    dept:"IT"
  }

  employees=[
    {
      code:1,
      name:"rahul",
      dept:"IT"
    },
    {
      code:2,
      name:"saumya",
      dept:"IT"
    }  

  ]

  ngOnInit(): void {
    this.courseContent=['HTML','CSS','JavaScript','TypeScript','Angular','Spring'];
    this.random =['saumya',true,76];
    this.myTuple=['rahul',78,false];
  }

}
