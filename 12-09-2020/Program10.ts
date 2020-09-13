export{}
interface Person{
    name:string
}
interface PersonDetails{
    age:number
    gender:string
}
interface Employee extends Person, PersonDetails{
    mob:number
}
let emp = <Employee>{};
emp.name = "Raju";
emp.age = 20;
emp.gender="male";
emp.mob= 123456;
console.log(`name : ${emp.name} Age:${emp.age} Gender:${emp.gender} Mob:${emp.mob} `);