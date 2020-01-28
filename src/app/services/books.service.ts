import { Injectable } from '@angular/core';
import {BookModel} from '../models/Book.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

bookSubject = new Subject<any[]>();

  private books: BookModel[] = [
    {
      photo: '',
      title: 'Test',
      author: 'Adil'
    }
  ];

  emitBooks() {
    this.bookSubject.next(this.books.slice());
  }

  constructor() { }
}
