import { Component, OnInit } from '@angular/core';
import { Detail } from '../name';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  det= new Detail();
  constructor() { }

  ngOnInit() {
  }

}
