function sum(...args){
    return args.reduce((add,el)=>
        add+el);
}


//DESTRUCTRING 
 const namess=['ram','shyam','rohan','mohan'];
 const[winner,runner,...other]=namess;
 console.log(winner,runner);
 console.log(runner);
 console.log(winner);
 console.log(other);


 //DESTRUCTING (OBJECTS)


 const person1={
    nam:'rohit',
    age:23,
    city: 'delhi',
    subject:['math','english','hindi'],
    username:'karan@123',
    password:'7788'
 };
 let{username:user,password:secret,city:place}=person1;
 console.log(user);
 console.log(secret);
 console.log(place);

