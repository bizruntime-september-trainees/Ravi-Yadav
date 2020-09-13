export{}
function displayName(name: string, greeting: string = "Hello") : string {  
    return greeting + ' ' + name + '!';  
}  
console.log(displayName('Jarvis'));     
console.log(displayName('Vission', 'Hi'));    
console.log(displayName('Mr'));     