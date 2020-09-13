interface Student {   
    name: string;   
    code: number;   
}  
let student = <Student> { };   
student.name = "Rohit"; // 
student.code = 123; 
console.log(student.name);