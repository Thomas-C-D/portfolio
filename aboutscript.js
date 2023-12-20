// About Me script 
// -------------------------

let bioTxt = document.querySelector("#bio");
let bioSpan = document.querySelector("#biochars");
function appndBio(txt) {
    for (let i = 0; i < txt.length; i++){
        bioTxt.innerHTML += `<span id='biochars' onmouseover='charCol()'>${txt[i]}</span>`;
        
    }

}
appndBio("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, tenetur. Sequi atque, adipisci unde libero minima quibusdam cum saepe quae. Expedita recusandae architecto quas at quis, dolorum optio tenetur porro.")

let x = 0;
const bioarray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var roots = document.querySelector(':root');


function charCol(){
    if (x == (bioarray.length - 1)){
        
        x = 0;
        
        
    }
    else {
       
        x++;
       
        
    }
    roots.style.setProperty('--biohover', `${bioarray[x]}`);
}