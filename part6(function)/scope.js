let sum = 54; //global scope
function calSum(a,b){
    let sum = a+b; //function scope
    console.log(sum);
}
console.log(sum);

//block scope

{
    let a=23;
    console.log(a);
}

//lexical scopes
 
 function outerFunction(){
   let x=23;
   let y=63;
   function innerFunction(){
    consoe.log(x);
   }
   innerFunction();
 }
