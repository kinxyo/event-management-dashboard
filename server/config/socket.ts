import {Server} from "socket.io";
import http from "http";

if (
    !process.env.DOMAIN_NAME ||
    !process.env.PORT
) {
    throw new Error("Cannot setup socket.io server without domain name and port");
}

const setupSocketIO = (server: http.Server, origin: string) => {
    return new Server(server, {
        cors: {
            origin: `http://${process.env.DOMAIN_NAME}:${process.env.PORT}`, // will be changed to https
            methods: ["GET", "POST"],
        },
    });
};

export default setupSocketIO;