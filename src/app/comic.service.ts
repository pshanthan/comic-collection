import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3000/comics';
  getComics() : Observable<Comic[]>{
    return this.httpClient.get<Comic[]>(`${this.apiUrl}`)
  }
}
