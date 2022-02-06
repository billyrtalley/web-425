/*
============================================
; Title: Assignment 5.3 Data Tables
; Author: Professor Krasso
; Date: February 5, 2022
; Modified By: William Talley
; Description: in-n-out booksp2 book interface typescript file
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
