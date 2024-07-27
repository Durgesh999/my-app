import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public students:any=[];
  public id:string="";
  public term:string="";

  constructor(private _studentService:StudentService) {
   _studentService.getStudentdetails().subscribe(
    (data:any)=>{
      this.students=data;
    },
    (err:any)=>{
      alert("internal server error!!!")
    }
   ) 
    
  } 

  ngOnInit(): void {
  }
delete(id:string){
  this._studentService.deleteStudentdetails(id).subscribe(
    (data:any)=>{
      alert ("deleted succesfully");
      location.reload();
    },
    (err:any)=>{
      alert ("delation failed");
    }
  )
}
filter(term:string){
  this._studentService.filterStudent(term).subscribe(
    (data:any)=>{
      this.students=data;
    },
    (err:any)=>{
      alert("internal error")
    }
  )
}
}
