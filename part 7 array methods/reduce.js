//REDUCES THE ARRAY TO A SINGLE VALUE

const a2=[1,2,3,4,5,6];
const result=a2.reduce((res,el)=>{
   return res+el;
})
console.log(result);


const a5=[1,2,3,94,5,6,7,78];
const maximum=a5.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
})
console.log(maximum);



const a6=[5,78,69,90,99];
let max=-1;
for(let i=0;i<a6.length;i++){
    if(a6[i]>max){
        max=a6[i];
    }
}
console.log(max);