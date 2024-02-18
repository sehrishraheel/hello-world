"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "sehrish raheel";
//step 1 show in lower case:
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
//step 2 show name in uppercase
let uppercase = personName.toUpperCase();
console.log(uppercase);
//step 3 show name in titlecase
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
