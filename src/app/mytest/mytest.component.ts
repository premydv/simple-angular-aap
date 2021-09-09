import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  id: string;
  
  min_size: string;
}

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css']
})
export class MytestComponent  {

  constructor() { }

  

}
