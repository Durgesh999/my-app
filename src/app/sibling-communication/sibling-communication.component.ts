import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-sibling-communication',
  templateUrl: './sibling-communication.component.html',
  styleUrls: ['./sibling-communication.component.css']
})
export class SiblingCommunicationComponent implements OnInit {

  public count:any =0;

  constructor(private _siblingService:SiblingService) { }
 
  ngOnInit(): void {
  }

}
