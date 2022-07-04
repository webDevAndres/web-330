/*
Title: float-min-field.js
Author: Andres Macias
Date: 7/03/2022
Description: checks to see if the field is greater than min
*/

export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }
    validate() {
        if (parseFloat(this.field) > this.min) {
            return true;
        }
        else {
            return false;
        }
    }

    getMessage() {
        return `${this.name} must be more than min. You entered ${this.field}.`;
    }
}