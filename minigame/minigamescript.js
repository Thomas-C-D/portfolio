
const foods = ['red', 'orange', 'yellow', 'green', 'blue']

 let answers = []
 let guesses = []
//use answers.includes(guesses) to make this work, I believe.

// guesses[0] = 'orange'
// answers = ['orange', 'red', 'green']
// if (answers[0] == guesses[0]){
    // console.log("!");
// }
// else if (answers.includes(guesses[0])) {
    // console.log("?");
// }
// else {
    // console.log("X");
// }

//perfecto! use this object logic to create the deliveries and the customers and make them work

// now let's create some arrays for the various sprites/stylings

const customer1sprites = ['...', '!', '?', 'X', ':(', ':)']
const customer2sprites = ['...', '!', '?', 'X', ':(', ':)']
const customer3sprites = ['...', '!', '?', 'X', ':(', ':)']
const spritecollection = [customer1sprites, customer2sprites, customer3sprites]

const answersprites = ['red', 'orange', 'yellow', 'green', 'blue', '<3']
// Create a var for the deliveries section to manage the descent


// descent.style.top = "100px" 

// create the delivery class

class Delivery {
 constructor(itemnum, guessnum){
    this.itemnum = document.querySelector(itemnum);
    this.guessnum = guessnum;
    this.x = Math.floor(Math.random() * 4);
    this.guess = this.itemnum.style.backgroundColor;
}

getFood(){
this.itemnum.style.backgroundColor = foods[this.x];
guesses[this.guessnum] = foods[this.x];
}

foodswap() {
    if(this.x < foods.length - 1){
        this.x++;
    }
    else{
        this.x = 0;
    }
    this.getFood();
}


} 

// Create the customer class 

class Customer {
    constructor(itemnum, answernum){
       this.itemnum = document.querySelector(itemnum);
       this.answernum = answernum;
       this.v = Math.floor(Math.random() * 4);
       this.sprites = spritecollection[this.answernum];
       this.itemnum.innerHTML = `${this.sprites[0]}`;
   }
   getOrder()
   {
    answers[this.answernum] = foods[this.v];
   }
   feedBack() {
    if (chances == 5 && guesses[this.answernum] == answers[this.answernum])
    {
        this.itemnum.innerHTML = `${this.sprites[5]}`
    }
    else if (chances == 5 && guesses[this.answernum] != answers[this.answernum]) {
        this.itemnum.innerHTML = `${this.sprites[4]}`
    }
    else if (guesses[this.answernum] == answers[this.answernum]){
        this.itemnum.innerHTML = `${this.sprites[1]}`;
    }
    else if (answers.includes(guesses[this.answernum])){
        this.itemnum.innerHTML = `${this.sprites[2]}`;
    }
    else {
        this.itemnum.innerHTML = `${this.sprites[3]}`;
    }
   }
   
   
   } 

   //create the thought class
   class Thought {
    constructor(itemnum, thoughtnum) {
        this.itemnum = document.querySelector(itemnum);
        this.thoughtnum = thoughtnum;
    }
     thoughtCheck() {
        console.log(this.itemnum)
            if (answers[this.thoughtnum] == guesses[this.thoughtnum]){
                
            this.itemnum.style.backgroundColor = "pink";
            }
            else{
                this.itemnum.style.backgroundColor = `${answers[this.thoughtnum]}`;
            }
        }
    
   }

const gamebutton = document.querySelector('#minigamebutton');
let chances = 0;
let wins = 0;
let losses = 0;

function gameBegin() {
    document.querySelector('#titlescreen').style.display = 'none';
    let deliverylook = document.querySelector('#deliveries');
let customerlook = document.querySelector('#customers');
let thoughtlook = document.querySelector('#thoughts');
thoughtlook.style.display = 'none';
deliverylook.style.display = 'flex';
customerlook.style.display = 'flex';
deliverylook.style.top = '0px';
customerlook.style.bottom = '0px';
    chances = 0;
    console.log(chances)
    gamebutton.removeEventListener('click', gameBegin);
    console.log(gamebutton.click);
gamebutton.innerHTML = 'Guess'
const delivery1 = new Delivery('#delivery1', 0);
const delivery2 = new Delivery('#delivery2', 1);
const delivery3 = new Delivery('#delivery3', 2);

const deliveries = [delivery1, delivery2, delivery3];

const customer1 = new Customer('#customer1', 0);
const customer2 = new Customer('#customer2', 1);
const customer3 = new Customer('#customer3', 2);

const customers = [customer1, customer2, customer3];

const thought1 = new Thought('#thought1', 0);
const thought2 = new Thought('#thought2', 1);
const thought3 = new Thought('#thought3', 2);

const thoughts = [thought1, thought2, thought3];

// function thoughtCheck() {
    // for (let t in thoughts){
        // if (answers[t] == guesses[t]){
        // thoughts[t].itemnum.style.backgroundColor = "pink";
        // }
        // else{
            // thoughts[t].itemnum.style.backgroundColor = answers[t];
        // }
    // }
// }
for (let d in deliveries) {
    deliveries[d].getFood();
    // document.querySelector(`#${deliveries[d].itemnum.id}`).addEventListener('click', function() {
        // deliveries[d].foodswap();
        // })
}
function dswap1(){
    delivery1.foodswap();
 }
 function dswap2(){
    delivery2.foodswap();
 }
 function dswap3(){
    delivery3.foodswap();
 }
document.querySelector(`#${delivery1.itemnum.id}`).addEventListener('click', dswap1);
document.querySelector(`#${delivery2.itemnum.id}`).addEventListener('click', dswap2);
document.querySelector(`#${delivery3.itemnum.id}`).addEventListener('click', dswap3);
for (let c in customers){
    customers[c].getOrder();
}
console.log(guesses, answers)

function gameAction() {
    // for (let c in customers) {
//     customers[c].feedBack();
//    
// };
if (answers[0] == guesses[0] && answers[1] == guesses[1] && answers[2] == guesses[2]){
    chances = 5;
}
else {
chances++;
}
for (let c in customers) {

    customers[c].feedBack();
   
   

};
// thoughtCheck();
for (let t in thoughts){
    thoughts[t].thoughtCheck();
}
console.log(guesses, answers, chances);

deliverylook.style.top = `${(chances * 100)}px`;
if (chances == 5)
{  if (guesses[0] == answers[0] && guesses[1] == answers[1] && guesses[2] == answers[2])
    {
    wins++;
    document.querySelector('#winslosses').innerHTML = `Wins: ${wins} Losses: ${losses}`;
    }
    else {
        losses++;
        document.querySelector('#winslosses').innerHTML = `Wins: ${wins} Losses: ${losses}`;
    }
    document.querySelector(`#${delivery1.itemnum.id}`).removeEventListener('click', dswap1);
 document.querySelector(`#${delivery2.itemnum.id}`).removeEventListener('click', dswap2);
 document.querySelector(`#${delivery3.itemnum.id}`).removeEventListener('click', dswap3);
    customerlook.style.bottom = '150px';
    thoughtlook.style.display = 'flex';
    gamebutton.removeEventListener('click', gameAction);
    gamebutton.innerHTML = 'Play again!';
    gamebutton.addEventListener('click', gameBegin);
}
}
gamebutton.addEventListener('click', gameAction);












}
gamebutton.addEventListener('click', gameBegin);


