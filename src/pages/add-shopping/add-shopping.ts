import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  shoppingItem = {} as ShoppingItem;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addItem(shoppingItem: ShoppingItem) {
    console.log(shoppingItem);
  }

}
