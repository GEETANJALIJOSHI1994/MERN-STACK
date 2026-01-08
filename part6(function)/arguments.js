function num(a,b){
    console.log(a+b)
}
num(20,56);

function name(firstName,LastName){
    console.log(`my name is ${firstName} ${LastName}`);
}
name("geetanjali","joshi");


function ave(a,b,c){
    let average =(a+b+c)/3;
    console.log(average)
}
ave(20,30,60)

function printTable(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
printTable(2);