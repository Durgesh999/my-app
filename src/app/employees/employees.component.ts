import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees:any = [
    {name:'Durgesh',age:25,dob:new Date('12/30/1998'),experience:2,package:6},
    {name:'Venkat',age:35,dob:new Date('10/22/1988'),experience:8,package:18},
    {name:'Arif',age:23,dob:new Date('1/23/1999'),experience:3,package:9},
    {name:'Kranthi',age:30,dob:new Date('6/17/1992'),experience:4.5,package:12},
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}