import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3000/comics';
  getComics() {}
}
