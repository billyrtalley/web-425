/*
============================================
; Title: Assignment 8.2 Server Side Communications
; Author: Professor Krasso
; Date: February 22, 2022
; Modified By: William Talley
; Description: in-n-out books wishlist component file
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {


  items: Array<IWishlistItem> = [];
  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}
