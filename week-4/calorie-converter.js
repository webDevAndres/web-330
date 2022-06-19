/* 
Title: calorie-converter.js
Author: Andres Macias
Date: 6/19/2022
Description: Class that filters food objects
*/
import { FoodModel } from "./food-model.js";

export class CalorieConverter{
   static data = [
   new FoodModel(1007, "Egg", 78),
   new FoodModel(1008, "Apple", 95),
   new FoodModel(1009, "Hamburger", 354),
   new FoodModel(1010, "Fries", 400),
   new FoodModel(1011, "Banana", 105),
   new FoodModel(1012, "Soda", 150)
   ];

   static find(name) {
   let foodList = this.data.filter((food)=> food.name.toLowerCase() === name);
      return foodList;
   }
};