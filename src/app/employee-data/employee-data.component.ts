import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  public newEmployee ={
    emp_id:0,
    emp_name:'',
    role:'',
    j_date:'',
    phoneno:0,
    email:'',
    dob:'',
    gender:'',
    address:''
  };

  public employees : any[]=[
    {emp_id:2343, emp_name:"venkat", role:"uideveloper",j_date:new Date('03/21/2023'), phoneno:9847463737, email:'v@gmail.com', dob:new Date('08/18/1995'), gender:'male', address:'d.no:204,kphb,hyd'},
    {emp_id:5634, emp_name:"arif", role:"manager",j_date:new Date('08/29/2020'), phoneno:8947463735, email:'a@gmail.com', dob:new Date('11/03/1996'), gender:'male', address:'d.no:124,srnagar,hyd'},
    {emp_id:7684, emp_name:"durgesh", role:"webdeveloper",j_date:new Date('12/09/2022'), phoneno:9848463730, email:'d@gmail.com', dob:new Date('02/08/1998'), gender:'male', address:'d.no:653,jntu,hyd'},
    {emp_id:8963, emp_name:"kranthi", role:"uxdeveloper",j_date:new Date('09/11/2019'), phoneno:9047463736, email:'k@gmail.com', dob:new Date('07/22/1995'), gender:'male', address:'d.no:764,sec,hyd'},
    {emp_id:2343, emp_name:"nikhil", role:"teamleader",j_date:new Date('07/06/2016'), phoneno:9847463737, email:'n@gmail.com', dob:new Date('04/29/1997'), gender:'male', address:'d.no:214,miyapur,hyd'},
    {emp_id:2343, emp_name:"saiteja", role:"jsdeveloper",j_date:new Date('05/19/2021'), phoneno:9866463737, email:'s@gmail.com', dob:new Date('09/11/1994'), gender:'male', address:'d.no:109,kphb,hyd'}

  ]
  

  constructor() { }

  ngOnInit(): void {
  }
  register(){
    this.employees.push({...this.newEmployee});
    this.newEmployee = {
      emp_id:0,
      emp_name:'',
      role:'',
      j_date:'',
      phoneno:0,
      email:'',
      dob:'',
      gender:'',
      address:''

    }
  }
  delete(i:number){
    this.employees.splice(i,1)
  }

}
