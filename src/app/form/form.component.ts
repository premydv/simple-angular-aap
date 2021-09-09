import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  userForm = new FormGroup({

    username: new FormControl(),
    password: new FormControl()
  });


  onFormSubmit(value: { username: any; password: any; }) {



    console.log(value.username);
    console.log(value.password);
  }
  // onFormSubmit(): void {

  //console.log('username:' + this.userForm.get('username').value);


  // }





}
