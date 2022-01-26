/*
============================================
; Title: Exercise 4.2- Inversion of Control and Dependency Injection composer-details.components.ts
; Date: January 25, 2022
; Modified By: William Talley
; Description: composer-details.components file
;
;Source: Professor Richard Krasso. ComposerApp Date: n.d. url:   https://buwebdev.github.io/composer-app/ ,
;Description: Solution to the exercise; used for reference to check progress of my work.
;Source: Professor Richard Krasso. buwebdev web-425 GitHub Repository
;Description: Used as a reference for proper code attribution
;url: https://github.com/buwebdev/web-425
;
;===========================================
*/

import {  Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    if(this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId);
    }
  }

  ngOnInit(): void {

  }
}
