import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MydataService {

  constructor( ) { }

  getData(){
    return [
              { name:"prem", id:101, age:21},
              { name:"abc", id:102, age:23},
              { name:"bd", id:101, age:25}
           ]
  }
 

}
