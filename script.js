let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [

{
question:"What is HTML?",
answer:"HTML is the standard language used to create web pages."
},

{
question:"What is CSS?",
answer:"CSS is used to style and design web pages."
},

{
question:"What is JavaScript?",
answer:"JavaScript adds interactivity to websites."
},

{
question:"What is DBMS?",
answer:"DBMS is software used to manage databases."
},

{
question:"What is an API?",
answer:"API allows communication between different software systems."
}

];

let currentIndex = 0;

const flashcard=document.getElementById("flashcard");
const question=document.getElementById("question");
const answer=document.getElementById("answer");
const counter=document.getElementById("counter");
const progressBar=document.getElementById("progressBar");

function saveCards(){
localStorage.setItem("flashcards",JSON.stringify(flashcards));
}

function celebrate(){
confetti({
particleCount:150,
spread:90,
origin:{y:0.6}
});
alert("🎉 Congratulations! You completed all flashcards!");
}

function showCard(){

question.innerText=flashcards[currentIndex].question;
answer.innerText=flashcards[currentIndex].answer;

counter.innerText=`Card ${currentIndex+1} of ${flashcards.length}`;

let progress=((currentIndex+1)/flashcards.length)*100;
progressBar.style.width=progress+"%";

flashcard.classList.remove("flip");

}

flashcard.addEventListener("click",()=>{
flashcard.classList.toggle("flip");
});

function nextCard(){

currentIndex++;

if(currentIndex>=flashcards.length){

celebrate();

currentIndex=0;

}

showCard();

}

function prevCard(){

currentIndex--;

if(currentIndex<0){
currentIndex=flashcards.length-1;
}

showCard();

}

function shuffleCards(){

flashcards.sort(()=>Math.random()-0.5);

saveCards();

currentIndex=0;

showCard();

}

function addCard(){

let q=document.getElementById("newQuestion").value;
let a=document.getElementById("newAnswer").value;

if(q==""||a==""){
alert("Please enter question and answer");
return;
}

flashcards.push({question:q,answer:a});

saveCards();

document.getElementById("newQuestion").value="";
document.getElementById("newAnswer").value="";

showCard();

}

function deleteCard(){

if(flashcards.length===1){
alert("You must keep at least one flashcard");
return;
}

flashcards.splice(currentIndex,1);

saveCards();

if(currentIndex>=flashcards.length){
currentIndex=flashcards.length-1;
}

showCard();

}

showCard();