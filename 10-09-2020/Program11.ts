class Student  
{  
    RollNo: number;  
    Name: string;   
    constructor(_RollNo: number, Name: string)   
    {  
        this.RollNo = _RollNo;  
        this.Name = Name;  
    }  
    showDetails()  
    {  
        console.log(this.rollNo + " : " + this.name);  
    }  
}  