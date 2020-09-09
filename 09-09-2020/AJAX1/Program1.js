console.log("Hello World");

var fetchdata = document.getElementById("fetchbtn");
fetchdata.addEventListener("click", buttonClickHandler)

function buttonClickHandler(){
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "Program1.json", true);



    xhr.onload = function()
    {
        
        if(this.status == 200)
        {
            var output = JSON.parse(this.responseText);
            console.log(output);
        }
        else{
            console.log("Error");
        }
    }
    xhr.send();
}