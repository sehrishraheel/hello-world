//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let  personName: string = "sehrish raheel";

//step 1 show in lower case:

let lowercaseName: string = personName.toLowerCase();

console.log(lowercaseName);

//step 2 show name in uppercase

let uppercase: string =personName.toUpperCase();

console.log(uppercase);

//step 3 show name in titlecase

let words: string[] = personName.split(" ");

let titlecaseName: string = ""

for (let i = 0; i < words.length; i++){
titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
};

console.log(titlecaseName)


