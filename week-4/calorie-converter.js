/*
TODO:
- create a static function with a single parameter
use javaScripts built in filter function to return
a new array of data with the objects matching the parameter string.
Use the FoodModel name field to compare the parameter string value against.




*/
import { FoodModel } from "./food-model";

export class CalorieConverter{
   static data = [
   new FoodModel(1007, "Egg", 78),
   new FoodModel(1008, "Apple", 95),
   new FoodModel(1009, "Hamburger", 354),
   new FoodModel(1010, "Fries", 400),
   new FoodModel(1011, "Banana", 105),
   new FoodModel(1012, "Soda", 150)
   ];
}  
console.log(data);