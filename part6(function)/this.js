const students={
    name:'ram',
    age:23,
    eng:99,
    maths:98,
    phy:97,
    getAvg(){
        let avg=(this.eng+this.maths+this.phy)/3;
        console.log(`${this.name} got average marks = ${avg}`);
    },
};



//this with arrow function

const students2={
    name1:'shiyam',
    age1:23,
    eng1:99,
    math:98,
    prop: this,
    getName(){
        console.log(this);
        return this.name;
    },
     getMath:()=>{
        console.log(this);
        return this.math;
    },
};



const student={
    nm: 'riya',
    mks: 90,
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this);
        },2000)
            
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this);
        },2000)
            
    },
};
