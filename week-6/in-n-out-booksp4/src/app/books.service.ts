/*
============================================
; Title: Assignment 5.4 Dialogs
; Author: Professor Krasso
; Date: February 6, 2022
; Modified By: William Talley
; Description: in-n-out booksp3 books.service.ts file; IBooks array and getBooks and getBook functions
;===========================================
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;
  constructor() {
    this.books = [
      {
        isbn: '0345339681',
        title: 'The Hobbit',
        description: 'Set against the Backdrop of Middle Earth, hobbit Bilbo Baggins sets out on a quest with 13 dwarves and the wizard Gandalf to reclaim the dwarf homeland and its treasure.',
        numOfPages: 432,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn: '0-393-03976-5',
        title: 'Fight Club',
        description: 'The 1996 debut novel of Chuck Palahniuk explores the alienated and frayed psyche of its narrator and his alter ego Tyler Durden in this dark satire and commentary on modern society.',
        numOfPages: 208,
        authors: ['Chuck Palahniuk']
      },
      {
        isbn: '0-679-74558-0',
        title: 'In Cold Blood',
        description: 'In Cold Blood is the true story of the Clutter family murders that shocked the residents of Holcomb, Kansas and the nation. Truman Capote defined the true crime genre with his classic dark novel.',
        numOfPages: 343,
        authors: ['Truman Capote']
      },
      {
        isbn: '0871-0657-7',
        title: 'Confederacy of Dunces',
        description: 'Confederacy of Dunces explores the world through the eyes of its ridiculous protagonist; a buffoonish, overeducated, unemployed, 30 year old slacker Ignatius Reilly.',
        numOfPages: 405,
        authors: ['John Kennedy Toole']
      },
      {
        isbn: '9780261103573',
        title: 'The Fellowship of the Ring',
        description: 'J.R.R. Tolkien returns to Middle Earth with this epic tale that follows hobbit Frodo Baggins and his allies as they set out to destroy the One Ring in the fires of Mount Doom.',
        numOfPages: 416,
        authors: ['J.R.R. Tolkien']
      }
    ]
   }

   getBooks(): Observable<IBook[]> {
     return of(this.books);
   }

   getBook(isbn: string): IBook {
     for (let book of this.books) {
       if (book.isbn === isbn) {
         return book;
       }
     }
     return {} as IBook;
   }
}
