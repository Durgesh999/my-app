import { Component, OnInit } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {

  public amazonItems: any = [];

  constructor(private _amazonService: AmazonService) {
    _amazonService.getAmazonItems().subscribe(
      (data: any) => {
        this.amazonItems = data;
      },
      (err:any)=>{
        alert("internal server error");
      }

    )
  }

  ngOnInit(): void {
  }

}
