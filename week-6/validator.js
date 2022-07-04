/*
Title: validator.js
Author: Andres Macias
Date: 7/03/2022
Description: uses the validation classes to validate the name and fields
*/


import { RequiredField } from "./required-field";
import { FloatField } from "./float-field";
import { FloatMinField } from "./float-min-field";
import { FloatMaxField } from "./float-max-field";

export class Validator {
    validator = [];
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    addRequiredField() {
        validator.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField() {
        validator.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min) {
        validator.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max) {
        validator.push(new FloatMaxField(this.name, this.field, max));
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