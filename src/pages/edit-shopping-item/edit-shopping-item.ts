import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  shoppingItemSubscription: Subscription;
  shoppingItem = {} as ShoppingItem;
  shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private database: AngularFireDatabase) {
    const shoppingItemId = this.navParams.get('shoppingItemId');
    this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`)

    this.shoppingItemSubscription = this.shoppingItemRef$.subscribe(shoppingItem => this.shoppingItem = shoppingItem);
  }

  editShoppingItem(shoppingItem: ShoppingItem) {
    this.shoppingItemRef$.update(shoppingItem);
    this.navCtrl.pop();
  }

  ionViewWillLeave() {
    this.shoppingItemSubscription.unsubscribe();
  }

}
