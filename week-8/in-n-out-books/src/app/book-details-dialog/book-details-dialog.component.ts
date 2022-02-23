/*
============================================
; Title: Assignment 8.2 Server Side Communications
; Author: Professor Krasso
; Date: February 22, 2022
; Modified By: William Talley
; Description: in-n-out books book-details-dialog component file
;===========================================
*/

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})

export class BookDetailsDialogComponent implements OnInit {

  book: IBook;

  constructor(private dialogREF: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.book = data.book;
   }

  ngOnInit(): void {
  }

}
