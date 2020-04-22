import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';


@Injectable()
export class DataService {

  //public messageSource: Subject<any> = new Subject();
  //private messageSource=new Subject<string>();
  private messageSource= new Subject();
  

  SetData(message){
    this.messageSource.next(message);
  }
  GetData(){
    return this.messageSource;
    
  }
  
  
  
  constructor() {}

  

}
