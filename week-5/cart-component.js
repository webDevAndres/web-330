/*
Title: cart-component.js
Author: Andres Macias
Date: 6/25/2022
Description: cart component for index.html
*/

class CartComponent extends HTMLElement{
    constructor() {
        super();
    }
    
    connectedCallback() {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
}

customElements.define("cart-component", CartComponent);