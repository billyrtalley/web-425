/*
============================================
; Title: Angular Material Cheat Sheet
; Author: Codevolution
; Derived from: Angular Material Tutorial. May 6, 2019
; YouTube url: https://www.youtube.com/playlist?list=PLC3y8-rFHvwilEuCqFGTL5Gt5U6deIrsU
; Date Modified: March 11, 2022
; Modified By: William Talley
; Description: material module specifically for importing material components
; Material Components are imported and added to a variable (MaterialComponents) that is an array.
; MaterialComponents is added to the import and export arrays(lines 35-40) and then exported to the app.module.ts
; this is to keep the app.module.ts file a little cleaner
;===========================================
*/


import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

const MaterialComponents= [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule
]

@NgModule({

  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
