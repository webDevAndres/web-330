/*
Title: validator.js
Author: Andres Macias
Date: 7/03/2022
Description: uses the validation classes to validate the name and fields
*/


import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
    validator = [];
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    addRequiredField() {
        this.validator.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField() {
        this.validator.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min) {
        this.validator.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max) {
        this.validator.push(new FloatMaxField(this.name, this.field, max));
    }

    validate() {
        for (const field of this.validator) {
            if (!field.validate()) {
                this.messages.push(field.getMessage());
                return false;
            }
        }
        return true;
    }
}