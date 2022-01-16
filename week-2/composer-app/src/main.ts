/*
============================================
; Title: Assignment 2.4 Routing in Action
; Date: January 15, 2022
; Modified By: William Talley
; Description: This program demonstrates the
;how to use routing and data binding to build a new Angular project for composers.
;
;Source: Professor Richard Krasso. ComposerApp Date: n.d. url:   https://buwebdev.github.io/composer-app/ ,
;Description: Solution to the exercise; used for reference to check progress of my work.
;Source: Professor Richard Krasso. buwebdev web-425 GitHub Repository
;Description: Used as a reference for proper code attribution
;url: https://github.com/buwebdev/web-425
;Source: Bootstrap. Tables.
;Description: Used as a reference Table styling
;url: https://getbootstrap.com/docs/4.0/content/tables/
;===========================================
*/


import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
