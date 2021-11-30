"use strict"; //modern strict mode% at the beginning of document/function

const result = confirm("Are you cat?");
console.log(result);

const answer1 = prompt("What pies do you like?", "Chocolate")
console.log(typeof(answer1)); //string


const answer2 = +prompt("What pies do you like?", "Chocolate")
console.log(typeof(answer2)); //number >> dynamic types 