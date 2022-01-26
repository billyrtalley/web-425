/*
============================================
; Title: Exercise 4.2- Inversion of Control and Dependency Injection about.component.spec.ts
; Date: January 25, 2022
; Modified By: William Talley
; Description: about.components spec file
;
;Source: Professor Richard Krasso. ComposerApp Date: n.d. url:   https://buwebdev.github.io/composer-app/ ,
;Description: Solution to the exercise; used for reference to check progress of my work.
;Source: Professor Richard Krasso. buwebdev web-425 GitHub Repository
;Description: Used as a reference for proper code attribution
;url: https://github.com/buwebdev/web-425
;
;===========================================
*/


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
