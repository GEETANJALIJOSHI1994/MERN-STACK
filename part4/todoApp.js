let todo = [];
let req = prompt("please enter your request :-");

while(true){
    if(req=="quit"){
      console.log("quitting app");
    }
    else if(req=="list"){
        console.log("-----------");
        for(let i =0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }
    else if(req=="add"){
        console.log("---------");
        let task = prompt("please enter your tash you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let index = prompt("please enter the task index");
        todo.splice(index);
        console.log("task deleted");
    }
    else{
        console.log("wrong input");
    }
}
