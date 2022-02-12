/*
============================================
; Title: Assignment 6.2 Output Proerties
; Author: Professor Krasso
; Date: February 10, 2022
; Modified By: William Talley
; Description: in-n-out booksp4 app component file
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
    this.assignment = 'Exercise 6.2- Input/Output Properties Part 1';
  }

}
