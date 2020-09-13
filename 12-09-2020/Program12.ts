export{}
interface Person{
    Fname : string;
    
    Lname : string;
    age : number;
    GetAge() ;
    FullName();
    Mob : number;
}
class Officer implements Person{
    Fname:string;
    Lname:string;
    age : number;
    Mob : number;
    GetAge() {
        return this.age;
    }
    FullName()
    {
        return this.Fname+ " " + this.Lname;
    }
    constructor(Fname:string, Lname:string, age:number, mob:number )
    {
        this.Fname = Fname;
        this.Lname = Lname;
        this.age = age;
        this.Mob = mob;
    }

}
var o1 = new Officer("Raju", "Sikka", 25, 123456);
console.log(o1);
console.log(o1.FullName());
console.log(o1.GetAge());
