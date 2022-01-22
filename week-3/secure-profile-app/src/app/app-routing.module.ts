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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
