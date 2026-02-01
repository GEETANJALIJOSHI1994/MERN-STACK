let btns = document.querySelectorAll('button');
console.dir(btns);

for(btn of btns){
    btn.onclick = sayHello;
    // btn.onmouseenter = function(){
    // console.log('you entered a button');
}
console.dir(btn);


function sayHello(){
    alert('hello');
}