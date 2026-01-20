let img1=document.querySelector("img");
console.log(img1);

img2=img1.getAttribute('id');
console.log(img2);

//if we change id name then we used setAttribute

img3=img1.setAttribute('id','newImage');
console.log(img1);


//to change manipulation of style

let header=document.querySelector('h1')
console.log(header);
let header1=header.style.color='yellow';
console.log(header1);

let para1=document.querySelector('p');
console.log(para1);
para1.style.color='purple';
console.log(para1);