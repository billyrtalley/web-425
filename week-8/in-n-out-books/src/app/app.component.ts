/*
============================================
; Title: Assignment 8.2 Server Side Communications
; Author: Professor Krasso
; Date: February 10, 2022
; Modified By: William Talley
; Description: in-n-out books app component file
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }

}
