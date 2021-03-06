import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/Users';
  constructor(private http: HttpClient) { }
  // API's Users
  // Regester
  register(data)
  {
    return this.http.post(this.url, data);
  }
}
