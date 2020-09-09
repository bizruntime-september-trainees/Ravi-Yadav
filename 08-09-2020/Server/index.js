var Websocket = require("ws");
var wss = new Websocket.Server({port : 8082});

wss.on("connection", ws => {
    console.log("The client is connected !");

    ws.on("message", data => {
        console.log("the client has sent to us : ${data}");
        ws.send(data.toUpperCase());
    });
    ws.on("close", () => {
        console.log("The client has disconnected !");
    });
});