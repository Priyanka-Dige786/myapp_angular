import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

    getEmployees()
    {
      return this.http.get("http://localhost:7879/emp"); 
    }
}
