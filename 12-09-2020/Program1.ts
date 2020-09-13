export{}
let studentEntries = new Set();  
   
 
studentEntries.add("John");  
studentEntries.add("Peter");  
studentEntries.add("Gayle");  
studentEntries.add("Kohli");   
studentEntries.add("Dhawan");   
  

console.log(studentEntries);   
   
 
console.log(studentEntries.has("Kohli"));        
console.log(studentEntries.has(10));        
   
 
console.log(studentEntries.size);    
   
 
console.log(studentEntries.delete("Dhawan"));      
   

studentEntries.clear();   
  

console.log(studentEntries);  