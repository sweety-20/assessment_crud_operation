import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //add employee
  addEmployee(data: any) {
    return this.http.post("http://localhost:3000/posts", data).pipe(
      map((res) => {
        return res;
      })
    )
  }

  //show employee
  getEmployee() {
    return this.http.get("http://localhost:3000/posts").pipe(
      map((res) => {
        return res;
      })
    )
  }

  //delete employee
  deleteEmployee(id: number) {
    return this.http.delete("http://localhost:3000/posts/"+id).pipe(
      map((res) => {
        return res;
      })
    )
  }

}
