
const foods = ['Apple.png', 'Carrot.png', 'Fish.png', 'Flan.png', 'Fries.png']

 let answers = []
 let guesses = []

const customer1sprites = ['./Images/LadyBear/LadyBearBegin.png', './Images/LadyBear/LadyBearSignYes.png', './Images/LadyBear/LadyBearSignMaybe.png', './Images/LadyBear/LadyBearSignNo.png', './Images/LadyBear/LadyBearResultWrong.png', './Images/LadyBear/LadyBearResultRight.png']
const customer2sprites = ['./Images/MisterSpider/MisterSpiderBegin.png', './Images/MisterSpider/MisterSpiderSignYes.png', './Images/MisterSpider/MisterSpiderSignMaybe.png', './Images/MisterSpider/MisterSpiderSignNo.png', './Images/MisterSpider/MisterSpiderResultWrong.png', './Images/MisterSpider/MisterSpiderResultRight.png']
const customer3sprites = ['./Images/SpeakerCat/SpeakerCatBegin.png', './Images/SpeakerCat/SpeakerCatSignYes.png', './Images/SpeakerCat/SpeakerCatSignMaybe.png', './Images/SpeakerCat/SpeakerCatSignNo.png', './Images/SpeakerCat/SpeakerCatResultWrong.png', './Images/SpeakerCat/SpeakerCatResultRight.png']
const spritecollection = [customer1sprites, customer2sprites, customer3sprites]

const answersprites = ['red', 'orange', 'yellow', 'green', 'blue', '<3']

class Delivery {
 constructor(itemnum, guessnum){
    this.itemnum = document.querySelector(itemnum);
    this.guessnum = guessnum;
    this.x = Math.floor(Math.random() * 4);
    this.guess = this.itemnum.style.backgroundColor;
}

getFood(){
this.itemnum.src = `./Images/Foods/${foods[this.x]}`;
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



class Customer {
    constructor(itemnum, answernum){
       this.itemnum = document.querySelector(itemnum);
       this.answernum = answernum;
       this.v = Math.floor(Math.random() * 4);
       this.sprites = spritecollection[this.answernum];
       this.itemnum.src = `${this.sprites[0]}`;
   }
   getOrder()
   {
    answers[this.answernum] = foods[this.v];
   }
   feedBack() {
    if (chances == 5 && guesses[this.answernum] == answers[this.answernum])
    {
        this.itemnum.src = `${this.sprites[5]}`
    }
    else if (chances == 5 && guesses[this.answernum] != answers[this.answernum]) {
        this.itemnum.src = `${this.sprites[4]}`
    }
    else if (guesses[this.answernum] == answers[this.answernum]){
        this.itemnum.src = `${this.sprites[1]}`;
    }
    else if (answers.includes(guesses[this.answernum])){
        this.itemnum.src = `${this.sprites[2]}`;
    }
    else {
        this.itemnum.src = `${this.sprites[3]}`;
    }
   }
   
   
   } 


   class Thought {
    constructor(itemnum, thoughtnum) {
        this.itemnum = document.querySelector(itemnum);
        this.thoughtnum = thoughtnum;
    }
     thoughtCheck() {
        console.log(this.itemnum)
            if (answers[this.thoughtnum] == guesses[this.thoughtnum]){
                
            this.itemnum.src = `./Images/Thoughts/Win.png`;
            }
            else{
                this.itemnum.src = `./Images/Thoughts/${answers[this.thoughtnum]}`;
            }
        }
    
   }

const gamebutton = document.querySelector('#minigamebutton');
const instructions = document.querySelector('#instructiontext')
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
instructions.innerHTML = `Lady Bear, Mister Spider, and Speaker Cat are all waiting for their food to be delivered. <br><br> Click on each delivery to change the item each customer will get, and then press the button to see if you've matched everyone's orders! <br><br> The customers will tell you if the delivery is incorrect ("X"), for somebody else ("?"), or just right ("!"). <br><br> Try to get all the orders correct before they arrive! Good luck!!!`
gamebutton.src = './Images/ButtonGuess.png';
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

    for (let d in deliveries) {
        deliveries[d].getFood();
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

function gameAction() {
    if (answers[0] == guesses[0] && answers[1] == guesses[1] && answers[2] == guesses[2]){
     chances = 5;
    }
else {
chances++;
}
for (let c in customers) {

    customers[c].feedBack();
   
   

};

for (let t in thoughts){
    thoughts[t].thoughtCheck();
}

    deliverylook.style.top = `${(chances * 100)}px`;
if (chances == 5)
{  if (guesses[0] == answers[0] && guesses[1] == answers[1] && guesses[2] == answers[2])
    {
    wins++;
    instructions.innerHTML = `Way to go!!! You'll earn a raise with this kind of work!<br><br>Press the button to play again!`;
    document.querySelector('#winslosses').innerHTML = `Wins: ${wins} Losses: ${losses}`;
    }
    else {
        losses++;
        instructions.innerHTML = `Looks like you'll need to work on your delivery skills... <br><br>Press the button to play again!`;
        document.querySelector('#winslosses').innerHTML = `Wins: ${wins} Losses: ${losses}`;
    }
    document.querySelector(`#${delivery1.itemnum.id}`).removeEventListener('click', dswap1);
    document.querySelector(`#${delivery2.itemnum.id}`).removeEventListener('click', dswap2);
    document.querySelector(`#${delivery3.itemnum.id}`).removeEventListener('click', dswap3);
    customerlook.style.bottom = '150px';
    thoughtlook.style.display = 'flex';
    gamebutton.removeEventListener('click', gameAction);
    gamebutton.src = './Images/ButtonReplay.png';
    gamebutton.addEventListener('click', gameBegin);
}
}
gamebutton.addEventListener('click', gameAction);
















}
gamebutton.addEventListener('click', gameBegin);
gamebutton.addEventListener('mousedown', function() {
    gamebutton.style.right = '-5px';
    gamebutton.style.top = '5px';
    gamebutton.style.boxShadow = '0px 0px';
});
gamebutton.addEventListener('mouseup', function() {
    gamebutton.style.right = '0';
    gamebutton.style.top = '0';
    gamebutton.style.boxShadow = '5px 5px';
});

