var button = document.getElementById("id1");
button.addEventListener("click", buttonhandler)
function buttonhandler(){
    var xhr =new XMLHttpRequest();
    xhr.open("POST", "Program3.json", true);
    xhr.getResponseHeader("content-type, application/json");

    xhr.onload = function()
    {
        if(this.status = 405)
        {
            document.getElementById("id2").innerHTML = this.responseText.innerHTML;
        }
        else{
            document.write.getElementById("id3").innerHTML = "Error";
        }
    }
    params = '{"Raju1", "24", "Bangaluru"}';
    xhr.send(params);

}