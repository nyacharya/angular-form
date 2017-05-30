import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {
  users;
  constructor(private http:Http){
    http.get('http://localhost:3000/users.json')
    .subscribe(res=> this.users = res.json());
  }
  

  ngOnInit() {
  }

}
