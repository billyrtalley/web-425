/*
============================================
; Title: Assignment 5.3 Data Tables
; Author: Professor Krasso
; Date: February 5, 2022
; Modified By: William Talley
; Description: in-n-out booksp2 app-routing module file
;===========================================
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
