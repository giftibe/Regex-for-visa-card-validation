const prompt = require('prompt-sync')({sigint:true});

/* RULES OF VISA CARD VALIDATION
-> First digit must be 4
-> Must contain 13 to 16 digits depending on how recent the card is
-> No alphabet or special character is required

    SAMPLE
    let card13 = '4634762827401'
    let card16 = '4155279860457201'
*/
let pattern = /^4[0-9]{12}(?:[0-9]{3})?$/

let user = prompt('Enter the 13 or 16 digits of your visa card number: ')
const cardlLength =user.length

let result = pattern.test(user)
function program(){
    result
    ? console.log(`These digits (${user}): is a VALID Visa card number of length result ${cardlLength} `)
    : console.log(`${user} is NOT a valid visa card number`);
}
program()