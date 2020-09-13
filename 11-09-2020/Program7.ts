let tuple = [22,34, "Raju", "Paju"];
function hey(tuple_values:any)
{
    for(var i =0; i<tuple_values.length; i++)
    {
        console.log(tuple[i]);
    }
}
hey(tuple);
tuple.push("Taju");
console.log(tuple);
tuple.pop();
console.log(tuple);
tuple[3] = "Taju";
console.log(tuple);
tuple=[];
console.log(tuple);