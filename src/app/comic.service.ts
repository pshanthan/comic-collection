import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comic } from '../Models/Comic';

@Injectable({
  providedIn: 'root',
})
export class ComicService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3000/comics';
  getComics(): Observable<Comic[]> {
    return this.httpClient.get<Comic[]>(`${this.apiUrl}`);
  }
  updateComic(c: Comic): Observable<Comic> {
    return this.httpClient.put<Comic>(`${this.apiUrl}/${c.id}`, c);
  }
  deleteComic(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
  addComic(c: Comic): Observable<Comic> {
    return this.httpClient.post<Comic>(`${this.apiUrl}`, c);
  }
  searchText(searchText: string): Observable<Comic[]> {
    return this.httpClient.get<Comic[]>(
      `${this.apiUrl}?search_title=${searchText}`,
    );
  }
}
