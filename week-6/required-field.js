/*
Title: required-field.js
Author: Andres Macias
Date: 7/03/2022
Description: checks for required field
*/
export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        return Boolean(this.field);
    }

    getMessage() {
        return `${this.name} is a required field.`;
    }
}



