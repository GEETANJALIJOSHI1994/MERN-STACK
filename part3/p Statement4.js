// a string trim it & convert it to uppercase 

let msg = "   i love my india    ";
let msg2 = msg.trim().toUpperCase();
console.log(msg2);


// slice index replace

let name = "  graphic era deemd  ";
console.log(name.slice(7))
console.log(name.indexOf(8));
console.log(name.replace("deemd","hill"));


// seprate and replace

let name2="graphic college";
console.log(name2.slice(7));
console.log(name2.replace("l","t"));
console.log(name2.slice(7).replace("l","t"));