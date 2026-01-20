let hed1 = document.querySelector('h2');
hed1.classList.add('blueText');
console.log(hed1);

let hed2 =hed1.classList.contains('blueText');
console.log(hed2);

let hed3 = hed1.classList.remove('blueText');
console.log(hed3);

let hed4 = hed1.classList.toggle('blueText');
console.log(hed4);