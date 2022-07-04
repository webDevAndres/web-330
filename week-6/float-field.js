/*
Title: float-field.js
Author: Andres Macias
Date: 7/03/2022
Description: checks to see if the field can be floated
*/

export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    validate() {
        if (!isNaN(this.field)) {
            return true;
        }
        else {
            return false;
        }
    }

    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}`;
    }
}
