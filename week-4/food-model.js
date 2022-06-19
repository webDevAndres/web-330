/*
Title: food-model.js
Author: Andres Macias
Date: 6/19/2022
Description: Class that contains a constructor that creates food objects
*/
export class FoodModel {
    constructor(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}