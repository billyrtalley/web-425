/*
============================================
; Title: Assignment 5.2 Navigation and Layout
; Author: Professor Krasso
; Date: February 2, 2022
; Modified By: William Talley
; Description: in-n-out booksp1 app component file
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
    this.assignment = 'Exercise 5.2- Navigation and Layout'
  }

}
