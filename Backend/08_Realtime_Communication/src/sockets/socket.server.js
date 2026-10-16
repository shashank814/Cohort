import { Server } from "socket.io"


/**
 * io => whole server
 * socket => single user
 * emit => fire event -> send an event to the server
 * on => listen event -> listen for an event from the server
 */


export default function initializeSocket(httpServer) {
    const io = new Server(httpServer)

    io.on("connection", (socket) => {
        console.log("A user connected: ", socket.id);

        socket.on("elon", (msg) => {
            console.log(msg);
            io.emit("musk", "hello from server via socket")
            // socket.emit("musk")
            // socket.broadcast.emit("musk")
            console.log("elon event received");
        })

        socket.on("disconnect", () => {
            console.log("A user disconnected: ", socket.id);
        })
    })
}