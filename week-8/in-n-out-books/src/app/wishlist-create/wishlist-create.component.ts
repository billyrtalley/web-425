
/*
============================================
; Title: Assignment 8.2 Server Side Communications
; Author: Professor Krasso
; Date: February 22, 2022
; Modified By: William Talley
; Description: in-n-out books wishlist-create component file
;===========================================
*/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {

  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })

    this.item = {} as IWishlistItem;
  }

}
