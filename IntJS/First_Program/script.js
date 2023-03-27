// // This is a comment 

// // Variables
// let queue = "Fork";
// queue = "Spoon";
// queue = "Spork";
// console.log(queue);
// var life = 25;
// life = 42;
// life = 'Pain';
// var life = 'Panic';
// console.log(life);
// const cd = 'Code';
// console.log(cd);

// // Math in Javascript
// let a = 8;
// let b = 25;
// let x = a+b;
// console.log(x);
// console.log(a+b);
// let y = b-a;
// console.log(b-a);
// let ko = a*b;
// console.log(ko);
// console.log(a*b);
// let r = a/b;
// console.log(r);
// console.log(a/b);

// // Modulus
// let l = 3;
// let g = 2;
// let p = 1%g;
// console.log(p);
// let v = g%l;
// console.log(v);

// // Shortcuts
// let was  = a += 1
// was = a++
// let what = a -= 17;
// what = a--

// // Conditionals
// let pet = "Bearded Dragon"
// if (pet == "Bearded Dragon") {
//     console.log("I have a cool pet");
// } else if(pet == "Cat") {
//     console.log('I have a pretty cool pet')
// } else {
//     console.log("I don't have a cool pet");
// }

// let age = 16;
// let condition = age >= 5 && age <= 19
// if (age >= 16) {
//     console.log("You can Drive")
// } else if (condition) {
//     console.log("You could be in school")
// } else {
//     console.log("Nothing special is happening")
// }

// let house = true;
// if (house) {
//     console.log("You live in a house.")
// } else if (house != true) {
//     console.log("You most likely don't live in a house.")
// } else if (house || condition) {
//     console.log("You are either a child or not")
// }

// Assignment Starts Here
// My Astronauts are going to the moon

// Varriables
let fuel = 654000
let MPG = 0.5
let speed = 500
let food = 1000
let crew = 4
let days = 365
let distance = days * speed

// Calculating Viable distance
let posdist = fuel * MPG
let posfood = crew * days
if (food > posfood || fuel > posdist) {
    console.log("You cannot make the trip")
    if (food > posfood) {
        console.log("Because you straved to death.")
    } else if (fuel > posdist) {
        console.log("Because you ran out of fuel.")
    }
} else {
    console.log("You have enough food and fuel to make the trip.")
}

if (speed > 1000) {
    console.log("You broke light speed.")
}

