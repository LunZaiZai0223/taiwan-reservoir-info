import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservoirService {
  constructor(private http: HttpClient) {}

  getReservoirDetail(): Observable<any> {
    return this.http.get<any>(`${environment.detailApiUrl}`);
  }
}
