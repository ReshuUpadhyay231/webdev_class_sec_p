//print total marks of students with marks greater than 60 after 20 marks have been added to those 
//who scored less than 60 
let student=[
    {name:"Alice", age:20, grade:"A", marks:80},
    {name:"Bob", age:22, grade:"B", marks:69},
    {name:"Charlie", age:23, grade:"C", marks:35},
    {name:"David", age:21, grade:"B", marks:55}
]

student.map(s=>{
    if(s.marks<60){
        s.marks+=20
    }
})

let totalMarks=0;
student.forEach(s=>{
    if(s.marks>60){
        totalMarks+=s.marks
    }
})

console.log("Total marks of students with marks greater than 60:", totalMarks)

/*

*/
let arr=[
    {firstName:'rahul', lastName:'sharma', age:25},
    {firstName:'anita', lastName:'gupta', age:76},
    {firstName:'sunil', lastName:'kumar', age:20},
    {firstName:'meena', lastName:'singh', age:25}
]
