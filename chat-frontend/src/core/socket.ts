import { io } from "socket.io-client";

const socket = io(window.location.origin.replace("3000", "3005"));

export default socket;