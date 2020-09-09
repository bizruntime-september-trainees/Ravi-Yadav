const Websocket = require("ws");
const wss = new Websocket.Server({port : 8082});

wss.on("connection", ws => {
    console.log("New Clients is connected");

    ws.on("message", data => {
        console.log("Sending data to us: $(data)");
        ws.send(data.toUpperCase());
    });
    ws.on("close", () => {
        console.log("Client is disconnected");
    });
});