/*
Title: Exercise 1.5- Components
Author: William Talley
 Date: 1/8/2022
//Description: During this assignment, we created an Angular web application
//The exercise was to create a new app, alter the html elements to fit the assignment requirements
//and to run and test the application in the browser.

Source Reference: Bellevue University web-425 GitHub repository
Date Accessed: 6-8 January, 2022
Source URL: https://github.com/buwebdev/web-425
Source Reference: Angular Tutorial for Beginners - Creating your first application | Lesson 2
Author: Richard Krasso
Date Accessed: 6-8 January, 2022
Source URL: https://www.youtube.com/watch?v=XRm0SnUJROU&t=363s
*/


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
