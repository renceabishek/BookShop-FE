import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl= '/rest/book';

  constructor(private http: HttpClient) { }

  

  public getAllBooks(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}`);
  }

  getBookByIsbn(isbn: String): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${isbn}`);
  }

  createBook(book: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, book);
  }

  updateBook(book: Object): Observable<any> {
    return this.http.put(`${this.baseUrl}`,book);
  }

  deleteBook(isbn: String): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${isbn}`);
  }
}
