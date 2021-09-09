import { Component } from '@angular/core';
import { MydataService } from './mydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prem';
  name="";
  constructor(private user:MydataService){
    let data=this.user.getData();
    console.log(data);
  }
 
}
