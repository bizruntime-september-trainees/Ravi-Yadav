var num = 4;
var Factorial = 1;
while (num >= 1) {
    var Factorial = Factorial * num;
    num--;
}
console.log("The factorial of the given number is: " + Factorial);
do {
    console.log();
    Factorial++;
} while (Factorial <= 30);
console.log(Factorial);
