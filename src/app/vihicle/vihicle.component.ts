import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vihicle',
  templateUrl: './vihicle.component.html',
  styleUrls: ['./vihicle.component.css']
})
export class VihicleComponent implements OnInit {

  public vehicles:any = [];
  public term:string ="";
  public column:string ="";
  public order:string ="";
  public limit:number =0;
  public pageNo:number =0;

  constructor(private _vehicleService:VehicleService) { 
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal serve error");
      } 
    )
  }
 
  ngOnInit(): void {
  }
  
  filter(){
    this._vehicleService.getFilteredVehicle(this.term).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal serve error");
      }
    )
  }

  sort(){
    this._vehicleService.getSortedVehicle(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal serve error");
      }
    )

  }
  page(){
    this._vehicleService.getLimitVehicle(this.limit, this.pageNo).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("internal serve error");
      }
    )
    
  }
  delete(id:string){
    this._vehicleService.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted succesfuly!");
        location.reload();
      },
      (err:any)=>{
        alert("deletion failed");
      }

    )
  }

}
