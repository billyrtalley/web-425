/*
============================================
; Title: Assignment 8.2 Server Side Communications
; Author: Professor Krasso
; Date: February 22, 2022
; Modified By: William Talley
; Description: in-n-out books book interface typescript file
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
