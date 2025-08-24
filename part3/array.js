// create array

let student = ["ram","kamal","sheetal"]
console.log(student);

// visualizing Array

let num = [2,4,5,6];
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num.length);
console.log(typeof num);

// creating array diffrent fome

let number = [1,2,3,4,5];
let name = ["ram","raghaw","rohit"];
let info = ["sheetal",4,7,9.0];
let empty = []
console.log(number,name,info,empty);

 

// arrays are mutable

let fruits = ["banana","mango","apple"];
fruits[0] = "litchi";
console.log(fruits);

// array methods (push pop unsift sift)

let markss = [57,89,34,78,55]
console.log(markss.push(89));
console.log(markss);
console.log(markss.pop());
console.log(markss);
console.log(markss.unshift(80));
console.log(markss);
console.log(markss.shift);
console.log(markss);


// indexOf array

let colors = ["red","white","black"];
console.log(colors.indexOf("red"));
console.log(colors.indexOf("white"));
console.log(colors.indexOf("black"));
console.log(colors.indexOf("blue"));


// concat array method

console.log(colors);
let color1=colors.concat("yellow","pink","brown");
console.log(color1);
all_color = colors.concat(color1);
console.log(all_color);


// reverse method

let color2 = colors.reverse();
console.log(color2);