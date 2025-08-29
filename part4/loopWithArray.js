let fruits = ["mango","banana","apple","litchi","orange"]
for(let i =0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}


// nested loop

let heroes=[["ironman","spiderman","thor"] , ["superman","wonder woman","flash"]];
for(let i =0;i<heroes.length;i++){
    console.log(i,heroes[i],heroes[i].length);
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j}, ${heroes[i][j]}`);
    }
}