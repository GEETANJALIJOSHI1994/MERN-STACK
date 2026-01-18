//... is spread operators in javascript

let k1=[4,6,7,8,9,9,2,4];
console.log(...k1);

//with array literals

let chars=[..."apnacollege"];
console.log(chars);

let odd=[1,3,5,7];
let even=[2,4,6,8];
let num=[...odd,...even];
console.log(num);
