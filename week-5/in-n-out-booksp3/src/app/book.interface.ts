/*
============================================
; Title: Assignment 5.4 Dialogs
; Author: Professor Krasso
; Date: February 5, 2022
; Modified By: William Talley
; Description: in-n-out booksp3 book interface typescript file
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
