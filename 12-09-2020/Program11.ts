interface nameArray {  
    [index:number]:string  
}  
  
let myNames: nameArray;  
myNames = ['Virat', 'Rohit', 'Sachin'];  
  
  
interface ageArray {  
    [index:number]:number  
}  
var myAges: ageArray;  
myAges =[10, 18, 25]; 
console.log("My name is : "+myNames[0]) ;
console.log("My age is: " +myAges[1]); 