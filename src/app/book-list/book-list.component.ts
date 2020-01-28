import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';
import {Subscription} from 'rxjs';
import {BookModel} from '../models/Book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: BookModel[];
  bookSubscription: Subscription;

  constructor(private booksService: BooksService) { }



  ngOnInit() {
this.bookSubscription = this.booksService.bookSubject.subscribe(
  (books: BookModel[]) => {
    this.books = books;
  }
);
this.booksService.emitBooks();
console.log('Hahoma lktouba');
console.log(this.books);
console.log('*******');
  }

}
