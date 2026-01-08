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