/*
============================================
; Title: Exercise 4.3- 4.3- Handling Form Events with Observables app.component.ts
; Date: January 26, 2022
; Modified By: William Talley
; Description: composer-details.components.ts
; added the import statement for debounce rxis debounceTime component
;added new a new function and name it filterComposers(name: string) and in the body of the function
;call the alert() function and pass-in the name parameter
;alert(name)
;In the components constructor and underneath the getComposers()
;call added a subscribe() method that listens for valueChanges and calls
;the filterComposers() function.  Also, make sure you add a debounceTime of 500.
;this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposer(val));
;debounce Time slows down how many time the filterCOmposer function gets called
;Source: Professor Richard Krasso. ComposerApp Date: n.d. url:   https://buwebdev.github.io/composer-app/ ,
;Description: Solution to the exercise; used for reference to check progress of my work.
;Source: Professor Richard Krasso. buwebdev web-425 GitHub Repository
;Description: Used as a reference for proper code attribution
;url: https://github.com/buwebdev/web-425
;
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;
  txtSearchControl = new FormControl('')

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    alert(name);
  }
}


