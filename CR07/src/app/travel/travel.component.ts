import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


// import travel destination
import { travel } from '../destination'

// import cart services
import { CartService } from '../cart.service';

// form validator
import { FormControl, FormGroup ,Validators } from '@angular/forms';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  
  travel = travel;
  v;

  // form controle validator
  update = new FormGroup({
    description: new FormControl('', Validators.required),
    start: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required)
  });

  

  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  
  ngOnInit(): void {
    
  }

  addToCart(v) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(v);
  }


  

  // // adding new travel destinations
  onSubmit() {

    if (this.update.valid) {
      var b = this.update.value;
      // console.table(b);
      this.travel.push(b);
    }

  }
}

