import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public accounts:any = [];
  public term:string ="";
  public column:string ="";
  public order:string ="";
  public limit:number =0;
  public pageNo:number =0;



  constructor(private _accountService:AccountService) { 
    _accountService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  ngOnInit(): void {
  }
  filter(){
    this._accountService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  sort(){
    this._accountService.getSortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("internal serve error");
      }
    )

  }
  page(){
    this._accountService.getLimitAcconts(this.limit, this.pageNo).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("internal serve error");
      }
    )
    
  }
  delete(id:string){
    this._accountService.deleteAccounts(id).subscribe(
      (data:any)=>{
        alert("deleted succesfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("deletion failed");
      }
    )
  }
  

}
