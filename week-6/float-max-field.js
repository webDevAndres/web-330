/*
Title: float-max-field.js
Author: Andres Macias
Date: 07/03/2022
Description: checks to see if the field is less than the max
*/

export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
        if (parseFloat(this.field) < this.max) {
            return true;
        }
        else {
            return false;
        }
    }

    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`;
    }
}