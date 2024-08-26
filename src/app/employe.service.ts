import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getEmployes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL);
  }
}

