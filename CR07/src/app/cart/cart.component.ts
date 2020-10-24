import { Component, OnInit } from '@angular/core';

// import cart service
import { CartService } from '../cart.service';

// import form builder
import { FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
v;
checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
 
  }

  ngOnInit(): void {
    this.v = this.cartService.getItems();
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.v = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
 
}
