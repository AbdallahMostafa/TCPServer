import net from 'net';

const server = net.createServer( socket => {
    console.log("TCP handshake successful with " + socket.remoteAddress + " : " + socket.remotePort);
    socket.write("Hello Client!");
    socket.on("data", data => {
        console.log("Recived data " + data.toString());
    }) 
});

server.listen(8800, "127.0.0.1");

// Client Code
// nc 127.0.0.1 8800