import { Injectable } from '@angular/core';
import { environment } from '../../environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sheetsPost$(data: string): Observable<string> {
    return this.http.post<string>(this.url, data, {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'json',
    });
  }
}
