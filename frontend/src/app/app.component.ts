import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users = [];
  constructor(private http:HttpClient) {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:5000/users')
      .subscribe(res => {
        this.users = res.users;
      });
  }
}
