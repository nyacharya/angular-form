import { Component, OnInit } from '@angular/core';
import { Detail } from '../name';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent  {

  det= new Detail();

constructor(private router: Router) {  
  
 }
  onSubmit(value: any){
    if (value.name == "nain" && value.email == "nain@gmail.com")
    {
      this.router.navigate(['/success']);
    }
    else
    {
      alert("worng name");
      this.det = new Detail();
    }
  }
 
}
