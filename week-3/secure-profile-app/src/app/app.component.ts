/*
============================================
; Title: Exercise 3.3- Passing Data to Routes, Part 2 app.component.ts
; Date: January 22, 2022
; Modified By: William Talley
; Description: app component
;
;Source: Professor Richard Krasso. ComposerApp Date: n.d. url:   https://buwebdev.github.io/composer-app/ ,
;Description: Solution to the exercise; used for reference to check progress of my work.
;Source: Professor Richard Krasso. buwebdev web-425 GitHub Repository
;Description: Used as a reference for proper code attribution
;url: https://github.com/buwebdev/web-425
;
;===========================================
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  assignment: string = 'Assignment Exercise 3.3 Passing Data to Routes, Part 2';

}
