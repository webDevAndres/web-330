/* 
Title: product.js
Author: Andres Macias
Date: 6/25/2022
Description: class that build a product and generates a random id
*/

export class Product{
   constructor(name,price) {
      this.name = name;
      this.price = price;
      this.id = Math.random().toString(16).slice(2);
   }


};