/*
============================================
; Title: Exercise 7.2 Reactive Forms
; Author: Professor Krasso
; Date: February 15, 2022
; Modified By: William Talley
; Description: GPA Calculator App pt 2 grade-summary component ts file
;===========================================
*/

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {
//two input values: grade of type string and course of type string
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
