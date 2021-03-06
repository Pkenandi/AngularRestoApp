import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url = 'http://localhost:3000/Restaurants';
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getList()
  {
    return this.http.get(this.url);
  }
  // API's
  // tslint:disable-next-line:typedef
  saveResto(data)
  {
    return this.http.post(this.url, data);
  }
  // tslint:disable-next-line:typedef
  deleteResto(id)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
  // tslint:disable-next-line:typedef
  updateResto(id)
  {
  }
}
