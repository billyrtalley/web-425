/*
============================================
; Title: Assignment 5.3 Data Tables
; Author: Professor Krasso
; Date: February 5, 2022
; Modified By: William Talley
; Description: in-n-out booksp2 app component file
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
    this.assignment = 'Exercise 5.3- Data Tables'
  }

}
