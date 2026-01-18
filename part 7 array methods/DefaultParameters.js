function sum(a,b=7){
    return a+b;
}
console.log(sum(5));

function sum1(x=7,y){
    return x+y;
}
console.log(sum1(5)); // output :NaN bcz 5 is assigned to x and y is undifined