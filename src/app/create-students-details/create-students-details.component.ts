import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-students-details',
  templateUrl: './create-students-details.component.html',
  styleUrls: ['./create-students-details.component.css']
})
export class CreateStudentsDetailsComponent implements OnInit {

  public studentform: FormGroup= new FormGroup({
    name:new FormControl(),
    dob:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
    city:new FormControl(),
    profile_picture:new FormControl(),

  })

  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
  }
create(){
  this._studentService.createStudentdetails(this.studentform.value).subscribe(
    (data:any)=>{
      alert("craete succesfully!!")
    },
    (err:any)=>{
      alert("internal error")
    }
  )

}
}
