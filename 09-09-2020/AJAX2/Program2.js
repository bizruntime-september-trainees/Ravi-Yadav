console.log("Hi !");
document.getElementById("print").innerHTML = "Hello World";


var fetchData = document.getElementById("button1");
fetchData.addEventListener("click", buttonClickHandler)
function buttonClickHandler(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "Program2.txt", true);

    xhr.onload = function()
    {
        if(this.status == 200)
        {
           // console.log(this.responseText);
           document.getElementById("demo").innerHTML = this.responseText
        }
        else{
            console.log("Error");
        }
    }
    xhr.send();
    
}