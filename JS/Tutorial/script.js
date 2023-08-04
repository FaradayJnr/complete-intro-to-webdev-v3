//Javascript Basic Overview
//2015, ES6 - ECMAScript - Eurpean Computer Manufacturing Association
const monthlyRent = 500; //variable
//monthlyRent - camel casing
//monthly_Rent - snake casing
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

//Numbers, Strings and Booleans
//String is an arbitrary collection of characters.
const myName = "Ransford Oppong"; //you can also use single quotes.
const escapeCharacter = 'This is an "Escape operation"';
console.log(myName);
console.log(escapeCharacter);
//string concatenation
const firstName = "Ransford";
const lastName = "Oppong";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);

//Booleans
let lightIsOn = true;
let isSkyGreen = false;

//numbers
let age = 25;

//control flow
let isSkyBlue = true;
//block of code
if (isSkyBlue) {
  console.log("The sky is blue");
} else {
  console.log("The sky is not blue");
}
//if you see three lines, it's just three = in a row, ===, the font just combines them into 1 big character.
//double equals : "type correction"
if (2 + 2 === 4) {
  console.log("It's true");
} else {
  console.log("It's false");
}
//else if
const friendsAtParty = 10;

if (friendsAtParty === 0) {
  console.log("No one here Oops!");
} else if (friendsAtParty <= 4) {
  console.log("number kinda cool");
} else {
  console.log("Oh yes! Give as a dance music!");
}

//Loops
//while loop
let numberOfFriends = 1;
while (numberOfFriends < 10) {
  console.log("You got a new friend");
  numberOfFriends = numberOfFriends + 1;
}
console.log(numberOfFriends);
//for loop
for (let i = 0; i < 10; i++) {
  console.log(numberOfFriends);
}

//Functions
// number = {parameter}
function addTwo(number) {
  return number + 2;
}
//function call
const finalAnswer = addTwo(5);
console.log(finalAnswer);
const otherAnswer = addTwo(10);
console.log(otherAnswer);

function greet(firstName, lastName, honorific, greeting) {
  return `${firstName} ${lastName}, ${greeting}, How are you doing? ${honorific} `;
}
console.log(greet("Ransford", "Oppong", "Doctor", "Good morning"));

//other ways to create a function
const meow = function () {
  console.log("Meeeeeeeeeeeeeow");
};

//third approach
const chirp = () => {
  console.log("chirp chirp");
};

meow();
chirp();

//builtins (method - is function built into something)
//toLowerCase
const statement = "Ransford Oppong";
const firstStatement = statement.toLowerCase();
console.log(firstStatement);
//substring
let anotherStatement = "how are you?";
anotherStatement = anotherStatement.substring(3, 5);
console.log(anotherStatement);

//MDN - Mozilla Developer Network
//round a number
let x = 5.4;
let roundedNumber = Math.round(x);
console.log(roundedNumber);
//ceil, includes

//objects
//property is a variable built into object
const person = {
  name: "Ransford Oppong",
  school: "KNUST",
  city: "Kumasi",
  age: "Kumasi",
};
console.log(person);
console.log(person.city);
//object can even have their functions

const dog = {
  name: "Luna",
  // speak(){
  //     console.log("woo woo")
  // }
  speak: function () {
    console.log("woo woo");
  },
};
dog.speak();
//nexted objects
const me = {
  name: {
    first: "Ransford",
    last: "Oppong",
  },
  location: {
    city: "Kumasi",
    town: "Ayeduase",
  },

  getAddress() {
    return `
        ${this.name.first} ${this.name.last}
        ${this.location.city} 
        ${this.location.town}
        `;
  },
};
console.log(me.name.first);
console.log(me.location.town);
console.log(me.getAddress())
//console is an object full of functions
//console.log
//console.error
//console.info

//contexts
