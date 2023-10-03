import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  data={
    to:"",
    subject:"",
    message:""
  }
  doSubmitForm(){
    console.log("Try to Submit form");
    console.log("Data",this.data);
  }

}
