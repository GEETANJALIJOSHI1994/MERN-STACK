let sum = function(a,b){
    return a+b;
}

let hello =function(){
    console.log("hello");
}
hello();




//HIGHER ORDER FUNCTION

function multipalGreet(func,count){
    for(let i=0;i<=count;i++){
        func();
    }
}
 let greet = function(){
    console.log('good morning');
 }
 multipalGreet(greet,9);



 //return a function from a function
 function oddEvenFactory(request){
    if(request=='odd'){
let odd = function(n){
    console.log(!(n%2==0));
}
return odd;
    } else if (request=='even'){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }
 }

 let request = 'odd';