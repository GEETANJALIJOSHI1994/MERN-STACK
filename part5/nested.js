const student = {
    aman : {
        grade : "A+",
        city : "dehradoon"
    },
    rohit : {
        grade : "A",
        city : "haldwni"
    },
    mohit : {
        grade : "b",
        city : "ranikhet"
    },
};
console.log(student);
student.rohit.city = "chandigar";
console.log(student);
console.log(student.rohit.grade);
console.log(student);