import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  api = 'http://localhost:4000/api';

  constructor(private http: HttpClient) {}

  getMovilidad(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/movilidad`);
  }

  getRanking(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/ranking`);
  }

  getQuintiles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/quintiles`);
  }
}

