import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public accountForm:FormGroup=new FormGroup({
    accountname:new FormControl(),
    accountbalance:new FormControl(),
    accountnumber:new FormControl(),
    city:new FormControl(),
    profile:new FormControl(),
  })

  constructor(private _accountService:AccountService) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.accountForm);
    this._accountService.createaccount(this.accountForm.value).subscribe(
      (data:any)=>{
        alert("create succesfully!!!");
        this.accountForm.reset();
      },
      (err:any)=>{
        alert("internal server error")
      }
    )
  }

}
