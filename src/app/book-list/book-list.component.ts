import { Component, OnInit } from '@angular/core';
import { Book } from '../Book';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private bookservice: BookService) { }

  ngOnInit() {
    this.fetchAlltheBooks();
  }

  fetchAlltheBooks() {
      this.books = this.bookservice.getAllBooks();
  }

  deleteBooks(isbn: String) {
    this.bookservice.deleteBook(isbn)
    .subscribe(data=>{
      console.log(data);
      this.fetchAlltheBooks();
    },
    error=> console.log(error)
    );
  }
}
