import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyledemo',
  templateUrl: './ngstyledemo.component.html',
  styleUrls: ['./ngstyledemo.component.css']
})
export class NgstylenclassdemoComponent implements OnInit {
  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getColor(country:string):string{
    let color = 'black';
    switch(country){
      case 'UK' : color= 'green';
                  break;
      case 'USA': color= 'blue';
                  break;
      case 'HK' : color= 'red';
                  break;
    }
    return color;

  }

}
