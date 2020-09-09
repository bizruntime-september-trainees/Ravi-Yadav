const Websocket = require("ws");
const wss = new Websocket.Server({port: 8082});

wss.on("connection", ws=> {
    console.log("new client is connected");


    ws.on("message", data => {
        console.log("sending data : $(data)");

    });
    

    ws.on("close", () => {
        console.log("Client is disconnected");
    })
});