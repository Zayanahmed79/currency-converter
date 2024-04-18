#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    IND: 74.57,
    PKR: 280,
};
let user_input = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"],
    },
    {
        name: "to",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"],
    },
    {
        name: "amount",
        message: "Enter your amount?",
        type: "number",
    },
]);
let fromamount = currency[user_input.from];
let toamonut = currency[user_input.to];
let amount = user_input.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamonut;
console.log(convertedamount.toFixed(2));
// console.log(user_input.amount);
// console.log(fromamount);
// console.log(toamonut);
