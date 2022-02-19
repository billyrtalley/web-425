/*
============================================
; Title: Exercise 7.2 Reactive Forms
; Author: Professor Krasso
; Date: February 15, 2022
; Modified By: William Talley
; Description: GPA Calculator App pt 2 gpa component ts file
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
//@Input variable named gpaTotal of type number
  @Input() gpaTotal: number;
  constructor() { }

  ngOnInit(): void {
  }

}
