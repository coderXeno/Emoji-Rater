const box=document.getElementById("box")
const text=document.getElementById("text")

let ratingGiven=false;
let ratingScore=1;
let interval=0;

box.addEventListener("focus", function(){
    text.textContent="Type any number between 1 and 5"
})

box.addEventListener("focusout",function(){
    text.textContent="Click to Rate!!"
    clearInterval(interval);
    const allIcons=document.querySelectorAll('i')
    allIcons.forEach(icon => icon.remove())
})

function generateRandomBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function showRandomRating(){
    const smiley=document.createElement('i');
    const coords=linkCoords=box.getBoundingClientRect();
    const smileyLeft=generateRandomBetween(0,coords.with-45)
    const smileyTop=generateRandomBetween(0,coords.height-45)
    switch(ratingScore){
        case 1:
            smiley.classList.add('far', 'fa-grin-hearts');
            break;
        case 2:
            smiley.classList.add('far', 'fa-laugh');
            break;
        case 3:
            smiley.classList.add('far','fa-grin-alt');
            break;
        case 4:
            smiley.classList.add('far','fa-meh');
            break;
        case 5:
            smiley.classList.add('far','fa-meh-rolling-eyes');
            break;
    }
    smiley.style.position="absolute";
    smiley.style.left=smileyLeft+'px';
    smiley.style.top=smileyTop+'px';
    box.appendChild(smiley);
    smiley.addEventListener('mouseover',(e)=>{
        smiley.remove();
    })
}

function HandleKeyDown(e){
    const keyCode=e.keyCode;
    console.log(keyCode);
    switch(keyCode){
        case 97:
        case 49:
            ratingScore=1;
            break;
        case 50:
        case 98:
            ratingScore=2;
            break;
        case 51:
        case 99:
            ratingScore=3;
            break;
        case 52:
        case 100:
            ratingScore=4;
            break;
        case 53:
        case 101:
            ratingScore=5;
            break;
    }

    if(ratingScore>0 && ratingScore<6){
        interval=setInterval(showRandomRating, 300);
        text.textContent=" "
    }
    else{
        clearInterval(interval);
    }
}

box.addEventListener("keydown",HandleKeyDown)