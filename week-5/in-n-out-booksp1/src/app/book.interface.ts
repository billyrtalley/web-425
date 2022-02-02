/*
============================================
; Title: Assignment 5.2 Navigation and Layout
; Author: Professor Krasso
; Date: February 2, 2022
; Modified By: William Talley
; Description: in-n-out booksp1 book interface typescript file
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
