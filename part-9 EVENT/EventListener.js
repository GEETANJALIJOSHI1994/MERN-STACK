let btns = document.querySelector('button');

for(btn of btns){
    btn.eventListener('click',sayHello);
    // btn.eventListener('click',sayName);
    btn.eventListener('click', function(){
        console.log('button clickes');
    });
}

function sayHello(){
    alart('hi how are you');
}
// function sayHello(){
//     alart('hello !');
// }