/*
============================================
; Title: Assignment 6.4 Layout
; Author: Professor Krasso
; Date: February 12, 2022
; Modified By: William Talley
; Description: GPA Calculator App pt 2 home component file
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//Variables for transcripts and setting up the arrays
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F']
  transcriptEntries: Array<ITranscript> = []
//variable for the GPA
  gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
   }

  ngOnInit(): void {
  }
//function to add the grade to the transcripts array
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry)
    this.transcriptEntry = {} as ITranscript;
  }

 //a for loop and iterate over the transcriptEntries array; use list in blackboard for scale
 calculateResults() {
  let gpa: number = 0;
  for (let entry of this.transcriptEntries) {
    console.log(entry.grade)
    switch(entry.grade) {
      case 'A':
        console.log('its an a')
        gpa += 4.00;
        break;
      case 'A-':
        gpa += 3.70;
        break;
      case 'B+':
        gpa += 3.33;
        break;
      case 'B':
        gpa += 3.00;
        break;
      case 'B-':
        gpa += 2.70;
        break;
      case 'C+':
        gpa += 2.30;
        break;
      case 'C':
        gpa += 2.00;
        break;
      case 'C-':
        gpa += 1.70;
        break;
     case 'D+':
        gpa += 1.30;
        break;
      case 'D':
        gpa += 1.00;
        break;
      case 'D-':
        gpa += 0.70;
        break;
      case 'F':
        gpa += 0.00;
        break;
    }
  }
  console.log(gpa);
  this.gpaTotal = gpa / this.transcriptEntries.length;
  console.log(this.gpaTotal);
}
//function to clear entries
clearEntries() {
  this.transcriptEntries = [];
  this.gpaTotal = 0;
}

}
