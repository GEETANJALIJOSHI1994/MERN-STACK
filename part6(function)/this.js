const students={
    name:'ram',
    age:23,
    eng:99,
    maths:98,
    phy:97,
    getAvg(){
        let avg=(this.eng+this.maths+this.phy)/3;
        console.log(`${this.name} got average marks = ${avg}`);
    }
}