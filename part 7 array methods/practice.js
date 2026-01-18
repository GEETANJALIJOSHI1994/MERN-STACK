const k=[89,90,80,60,40,70];
const multipaly=k.every((k)=>{
    if(k%10==0){
        return k;
    }else{
         return false;
    }
});
console.log(multipaly);


const p=[23,54,67,89,90,34,70];
const minimum=p.reduce((min,el)=>{
    if(el>min){
        return min;
    }
    else{
        return el;
    }
})
console.log(minimum);

//second method to find minimum value in array

const q=[45,78,23,56,78];
const min=q[0];
for(let i=0;i<=q.length;i++){
    if(q[1]<min){
        min=q[i];
    }
}
console.log(min);