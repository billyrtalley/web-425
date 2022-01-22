/*
============================================
; Title: Exercise 3.2- Passing Data to Routes, Part 1 composer.interface.ts
; Date: January 22, 2022
; Modified By: William Talley
; Description: TypeScript file for the Composer Object interface
;
;
;Source: Professor Richard Krasso. ComposerApp Date: n.d. url:   https://buwebdev.github.io/composer-app/ ,
;Description: Solution to the exercise; used for reference to check progress of my work.
;Source: Professor Richard Krasso. buwebdev web-425 GitHub Repository
;Description: Used as a reference for proper code attribution
;url: https://github.com/buwebdev/web-425
;
;===========================================
*/

export interface IComposer {
  composerId: number;
  fullName: string;
  genre: string;
}
