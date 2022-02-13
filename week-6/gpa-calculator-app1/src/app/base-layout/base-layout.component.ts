/*
============================================
; Title: Assignment 6.3 Layout
; Author: Professor Krasso
; Date: February 12, 2022
; Modified By: William Talley
; Description: GPA Calculator App pt 1 base-layout component file
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;

  constructor() {
    this.assignment = 'Assignment 6.4- Input Properties';
  }

  ngOnInit(): void {
  }

}
