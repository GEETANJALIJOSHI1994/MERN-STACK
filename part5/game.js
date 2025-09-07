const num = prompt("enter random number");
console.log(num);

const random = Math.floor(Math.random()*num)+1;
console.log(random);

let guess = prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
     if(guess==random){
        console.log("you are right ! congrats!!",random);
        break;
    } else if(guess<random){
        guess=prompt("your guess was to small, please try again");
    }
    
    else{
       guess = prompt("our guess was to large, please try again");
     }
}