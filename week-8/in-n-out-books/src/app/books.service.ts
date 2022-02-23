/*
============================================
; Title: Assignment 8.2 Server Side Communications
; Author: Professor Krasso
; Date: February 22, 2022
; Modified By: William Talley
; Description: in-n-out books books.service.ts file
;===========================================
*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
//got rid of IBooks array and added isbns array
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ];

  constructor(private http: HttpClient) { }

//removed the Observable<IBook> return type
//added new variable named params of type HttpParams
//used the params.append function add entries for bibkeys, isbns, format json and jscmd, details
//Don't forget to use ` in front of ISBN

   getBooks()  {

    let params = new HttpParams();

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    return this.http.get('https://openlibrary.org/api/books', {params: params})
   }
}
