/*
============================================
; Title: Exercise 4.2- Inversion of Control and Dependency Injection app.component.ts
; Date: January 25, 2022
; Modified By: William Talley
; Description: composer-details.components.ts
;
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

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {}
}
