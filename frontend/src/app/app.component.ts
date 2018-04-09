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
    this.http.get('/users')
      .subscribe((res: any) => {
        this.users = res.users;
      });
  }
}
