/*
============================================
; Title: Assignment 6.2 Output Properties
; Author: Professor Krasso
; Date: February 10, 2022
; Modified By: William Talley
; Description: in-n-out booksp4 book-details-dialog component file
;
;
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
