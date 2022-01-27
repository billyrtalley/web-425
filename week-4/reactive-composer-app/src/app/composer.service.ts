/*
============================================
; Title: Exercise 4.2- Inversion of Control and Dependency Injection component.service.ts
; Date: January 25, 2022
; Modified By: William Talley
; Description: component.service file; created with ng g s composer in the terminal window
;this replaced composer.class.ts file from the week 3 exercises
;Source: Professor Richard Krasso. ComposerApp Date: n.d. url:   https://buwebdev.github.io/composer-app/ ,
;Description: Solution to the exercise; used for reference to check progress of my work.
;Source: Professor Richard Krasso. buwebdev web-425 GitHub Repository
;Description: Used as a reference for proper code attribution
;url: https://github.com/buwebdev/web-425
;
;===========================================
*/


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface'

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
  this.composers = [
    {
      composerId: 100,
      fullName: 'Kurt Cobain',
      genre: 'Grunge',
    },
    {
      composerId: 101,
      fullName: 'Eddie Vedder',
      genre: 'Grunge',
    },
    {
      composerId: 102,
      fullName: 'Chris Cornell',
      genre: 'Grunge',
    },
    {
      composerId: 103,
      fullName: 'Layne Staley',
      genre: 'Grunge',
    },
    {
      composerId: 104,
      fullName: 'Adam Yauch',
      genre: 'Hip Hop',
    },
  ];
}

getComposers() {
  return this.composers;
}

getComposer(composerId: number) : IComposer {
  for (let composer of this.composers) {
    if (composer.composerId === composerId) {
      return composer;
    }
  }
  return {} as IComposer;
}
}
