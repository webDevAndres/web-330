/*
Title: cart-component.js
Author: Andres Macias
Date: 6/25/2022
Description: Adds items to a products array
*/

export class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    count() {
      return this.products.length + 1;
    }
  
    add(product) {
      this.products.push(product);
    }
  
    [Symbol.iterator] = function() {
      let index = 1;
      let product = this.product;

      return {
        next: function() {
            return { value: product[++index], done: !(index in data)};
        }
      }
    }
  }