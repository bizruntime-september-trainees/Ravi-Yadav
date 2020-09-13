export{}
class Studio{
    private stdCode:number;
    stdName:string;
    constructor(name:string, code:number)
    {
        this.stdName = name;
        this.stdCode = code;
    }
    display()
    {
        return(`My Name: ${this.stdName} My Unique No: ${this.stdCode}`);
    }
}
let s1 = new Studio("Raju", 100);
console.log(s1.display());