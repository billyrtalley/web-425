/*
============================================
; Title: Assignment 5.4 Dialogs
; Author: Professor Krasso
; Date: February 6, 2022
; Modified By: William Talley
; Description: in-n-out booksp3 app component file
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
    this.assignment = 'Assignment 5.4- Dialogs'
  }

}
