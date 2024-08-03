import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {

  public count$:BehaviorSubject<any> = new BehaviorSubject(0);

  constructor(private _siblingService:SiblingService) { }

  getItems(){
    return this.count$
  }

  setItems(value:any){
    this.count$.next(value);
  }
}