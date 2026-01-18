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