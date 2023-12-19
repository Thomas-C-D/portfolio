let bioTxt = document.querySelector("#bio");
let bioSpan = document.querySelector("#biochars");
function appndBio(txt) {
    for (let i = 0; i < txt.length; i++){
        bioTxt.innerHTML += `<span id='biochars'>${txt[i]}</span>`;
        
    }

}
appndBio("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, tenetur. Sequi atque, adipisci unde libero minima quibusdam cum saepe quae. Expedita recusandae architecto quas at quis, dolorum optio tenetur porro.")