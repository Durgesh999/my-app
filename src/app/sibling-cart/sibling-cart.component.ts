import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-sibling-cart',
  templateUrl: './sibling-cart.component.html',
  styleUrls: ['./sibling-cart.component.css']
})
export class SiblingCartComponent implements OnInit {

  public count:any = 0;

  constructor(private _siblingService:SiblingService) {
    
    _siblingService.getItems().subscribe(
      (data:any)=>{
        this.count=data;
      }
    )
   }

  ngOnInit(): void {
  }

}
