let guess = prompt("enter your favorite movie");
let Movie = "Avtar";

while((guess != Movie) && (guess!="quit")){
    console.log("wrong");
    guess = prompt("wrong guess ,please try again");
}
if(guess==Movie){
    console.log("congrats");
}
else{
    console.log("you are quit");
}