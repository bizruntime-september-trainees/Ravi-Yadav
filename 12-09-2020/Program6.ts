export{}
class A  
{  
    public foo(s: string): number;  
    public foo(n: number): string;  
    public foo(arg: any): any   
    {  
        if (typeof(arg) === 'number')  
            return arg.toString();  
        if (typeof(arg) === 'string')  
            return arg.length;  
    }  
}  
let obj = new A();  
console.log("Result: " +obj.foo(101));  
console.log("Length of String: " +obj.foo("HelloWorld"));  