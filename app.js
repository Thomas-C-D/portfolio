
let bioTxt = document.querySelector("#bio");
let bioSpan = document.querySelector("#biochars");
function appndBio(txt) {
    for (let i = 0; i < txt.length; i++){
        bioTxt.innerHTML += `<span id='biochars' onmouseover='charCol()'>${txt[i]}</span>`;
        
    }

}
appndBio(`I'm a graphic designer, artist, front-end software developer and General Assembly alumni from Kentucky. I've loved art, video games, and animation as far back as I can remember, and now I'm making my own works, too. Whether you're looking for someone promising or you're just here to browse, I've got it all - a sophisticated sense for web design, sleek animation skills, and an intelligent art direction cultivated through all the artists that have inspired me over the years. Come on in. Let me show you around. `)

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

// Script for resume modal
document.querySelector('#resume-open').addEventListener('click', openResume);
document.querySelector('#resume-close').addEventListener('click', closeResume);

function openResume() {
    document.querySelector('#resume-modal').style.top = '80px';
    document.querySelector('#modal-film').style.display = 'block';
}
function closeResume() {
    document.querySelector('#resume-modal').style.top = '900px';
    document.querySelector('#modal-film').style.display = 'none';
}