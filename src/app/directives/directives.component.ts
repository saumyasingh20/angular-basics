import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showAddress:boolean = true;
  
  employees=[
    {
      code:1,
      name:"rahul",
      dept:"IT",
      address:{city:"Bikaner"}
    },
    {
      code:2,
      name:"saumya",
      dept:"IT",
      address:{city:"Delhi"}
    }  

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
