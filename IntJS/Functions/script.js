// // Global Variables
// let scores = 5


// let score = 17 // Global

// function hourToMin(hours) {
//     let result = hours*60; // Local
//     return result
// }

// let a = hourToMin(38);
// console.log(a)

// function daysToHours(days) {
//     return days*24;
// }

// let day = daysToHours(16)
// console.log(day)

// // Checking an Item
// let balance = 100
// let stock = 50
// let price = 5

// // Function decleration
// function sellItem(quantity){
//     if (stock >= quantity) {
//         stock -= quantity
//         balance += price * quantity
//         console.log("Purchase Completed ", '$', balance, " and ", stock, "Items left")
//     } else {
//         console.log("Order Canceled, inffucient stock.")
//     }   
// }

// // Calling the function
// sellItem(10);

// // Objects
// let player = {
//     age : 98, 
//     hp : 0.5,
//     stamina : '10',
//     size : 'XS', 
//     outfit : {
//         color : "Black",
//         fabric : "Steel",
//         type : "plated armor"
//     }
// };

// console.log(player);

// // Access Parts of an object
// console.log( player.age);
// console.log( player[ 'age'])

// // Modify pieces of an object
// player.age = 27
// console.log( player.age);

// player.outfit.color = 'pink';
// console.log(player);

// // Appending to our object
// player.name = 'John Cena';
// console.log(player)

// // Delete parts of an object
// delete player.outfit;
// console.log(player)

// Methods
let player = {
    name : "John Cena",
    inventory : ["gold", "shotgun"],
    hp : 100,
    bandages : 5,
    heal : function() {
        if (this.bandages > 0 && this.hp <= 90) {
            this.hp += 10
            this.bandages -= 1
            console.log(this.hp)
        } else if (this.bandages == 0) {
            console.log(this.name + " has ran out of bandages :(")
        } else if (this.hp > 90) {
            console.log(this.name + " is already at full health")
        }
    }
}

let enemy = {
    name : "Vin Diesel",
    inventory : ["gold", "sniper rifle"],
    atkdmg : 10,
    attack : function(player) {
        player.hp -= this.atkdmg
        console.log(this.name + " has attacked " + player.name + "and hit them for " + this.atkdmg)
        if (player.hp <= 0) {
            console.log(player.name + " has been killed by " + this.name)
            delete player
        }
    }
}

let i = 5
while(i > 0){
    i --
    player.bandages ++
}

let q = 10
while(q > 0){
    q --
    enemy.atkdmg ++
}

while(player.inventory) {
    player.inventory = []
}

while (player.hp > 0) {
    enemy.attack(player)
    player.heal()
}



// // Arrays (lists)
// let list = ['immortal rabbit', 435, 'Mars', 'better than the groundhog'];
// console.log(list);

// // Change the infomation
// list[3] = "The ground hog is always wrong.";
// console.log(list);

// // Access infomation
// let groundhog = list[1];
// console.log(groundhog);

// // Access the last spot in a list
// let log = list[list.length-1];
// let last = list.length;

// // Add item
// list.push('the groundhog is inaccurate');

// // delete the last item in a list
// list.pop();
// console.log(list);

// // Iterating through arrays
// let highScores = [78, 97, 105];
// // Increase scores by one
// let u = 0;
// while(j < highScores.length) {
//     highScores[j] ++;
//     j ++;
// }

// console.log(highScores);

// console.log(highScores);
// let bestDay = [
//     {
//       title : "Groundhog Day",
//       worth : "Nothing",
//       person : "Only Mr. Black"
//     },
//     {
//         title : "June 23rd",
//         worth : "A lot",
//         person : "Myself"
//     }
//     {
//         title : "Feb. 18th",
//         worth : "depends",
//         person : "Kaden"
//     }
// ]

// bestDay.forEach(function(entry){
//     if(entry.title == "Groundhog Day"){
//         entry.title = "GroundHog Day"
//     } else{
//         entry.title = ("groundhog day")
//     }
// })

// console.log(bestDay)

// // Multiedimsional Arrays
// let array = [[1, 2, 3],[1, 2, 3],[1, 2, 3]]
// console.log(array);
// console.log(array[0][0])

// let terrain = [
//     ['desert', 'desert', 'forest', 'beach']
//     ['desert', 'forest', 'beach', 'island']
//     ['mine', 'forest', 'burned out forest', 'ocean']
// ]
// console.log(terrain)
// terrain[2][3] = 'beach'
// console.log(terrain)


// function Eat()