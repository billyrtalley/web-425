/*
============================================
; Title: Exercise 4.2- Inversion of Control and Dependency Injection composer.interface.ts
; Date: January 25, 2022
; Modified By: William Talley
; Description: composer.interface file
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
