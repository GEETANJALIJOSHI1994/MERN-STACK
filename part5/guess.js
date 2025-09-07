const max = prompt("enter maximum number");
console.log(max);

const random = Math.floor(Math.random() * max)+1;

let guess = prompt("enter your guess");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }

    if(guess==random){
        console.log("you are right !! congrats ",random);
        break;
    }else if(guess < random){
        guess = prompt("hints:guess number is small ! please try again");
        
    }else{
        guess = prompt("hints: guess number is large !! plese try again");
       
    }
}