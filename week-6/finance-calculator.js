/*
Title: finance-calculator.js
Author: Andres Macias
Date: 7/03/2022
Description:
*/

export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;
    static calculateFutureValue(monthlyPayment, rate, years) {
        let months = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;

        let futureValue = presentValue * (Math.pow(interestRate, months));

        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat('en-Us',{
            style: "currency",
            currency: "USD",
        });

        return currencyFormatter.format(field);
    }


}