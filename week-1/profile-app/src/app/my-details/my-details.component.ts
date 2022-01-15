/*
Title: Exercise 1.5- Components
Author: William Talley
 Date: 1/8/2022
Description: During this assignment, we created an Angular web application
The exercise was to create a new app, alter the html elements to fit the assignment requirements
and to run and test the application in the browser.

Source Reference: Bellevue University web-425 GitHub repository
Date Accessed: 6-8 January, 2022
Source URL: https://github.com/buwebdev/web-425
Source Reference: Angular Tutorial for Beginners - Creating your first application | Lesson 2
Author: Richard Krasso
Date Accessed: 6-8 January, 2022
Source URL: https://www.youtube.com/watch?v=XRm0SnUJROU&t=363s
*/
/*
============================================
; Title: Assignment 2.3 Data Binding
; Author: Angular
; Date: January 15, 2022
; Modified By: William Talley
; Description: This program demonstrates the
;how to bind values to HTML elements in an Angular project.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2022", "#CodingWithAngular", "#ngOmaha"
  ];
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor
  }

  toString() {
    console.log(`\n  Full name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`);
  }

}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Billy Talley", "Tacos", "Blue");
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
