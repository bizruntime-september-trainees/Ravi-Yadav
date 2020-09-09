document.getElementById("button1").addEventListener("click", click);
//document.getElementById("button2").addEventListener("click", clicka);

function click() {
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "Program3.json", true);
    xhr.onload = function () {
        if (this.status == 200) {
            var user = JSON.parse(this.responseText);
            var output = "";
            output += "<ul>" +
                "<li> Name:" + user.name + "</li>" +
                "<li> Age:" + user.age + "</li>" +
                "<li> Comapny:" + user.company + "</li>" +
                "</ul>"
            document.getElementById("result").innerHTML = output.innerHTML;


        }
    }
    xhr.send();
    
    
}
