import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[] = [];
  showExtended: boolean=true;
  loaded:boolean= true;
  constructor() { }

  ngOnInit(): void {
    this.users=[
      {
      firstName:'Tom',
      lastName:'Cruise',
      age:24,
      address:{
        street:"Koramangala",
        city:"Bengaluru",
        state:"Karnataka"
      }
    },{
      firstName:'Abdul',
      lastName:'Cruise',
      age:22,
      address:{
        street:"Indiranagar",
        city:"Bengaluru",
        state:"Karnataka"
      }
    },{
      firstName:'Rahul',
      lastName:'Washington',
      age:24,
      address:{
        street:"Whitefield",
        city:"Bengaluru",
        state:"Karnataka"
      }
    }
    ,{
      firstName:'William',
      lastName:'Suryavanshi',
      age:22,
      address:{
        street:"",
        city:"Bengaluru",
        state:"Karnataka"
      }
    }
  ]

  }

}
