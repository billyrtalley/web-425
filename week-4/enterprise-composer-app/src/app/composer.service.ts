/*
============================================
; Title: Exercise 4.4- Async Pipe composer.service.ts
; Date: January 29, 2022
; Modified By: William Talley
; Description: component.service file;
;
;Source: Professor Richard Krasso. buwebdev web-425 GitHub Repository
;Description: Used as a reference for proper code attribution
;url: https://github.com/buwebdev/web-425
;
;===========================================
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
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

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number): IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map((composers) =>
        composers.filter(
          (composer) => composer.fullName.toLowerCase().indexOf(name) > -1
        )
      )
    );
  }
}
