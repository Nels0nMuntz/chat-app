import express from "express";
import { Server } from "socket.io";
import { UserController, DialogController, MessageController } from "../controllers";
import bodyParser from 'body-parser';
import { updateLastSeen, checkAuth } from "../middlewares";
import { signinValidation, signupValidation } from "../utils";

const createRoutes = (app: express.Application, io: Server) => {
    const userController = new UserController(io);
    const dialogController = new DialogController();
    const messageController = new MessageController();

    app.use(bodyParser.json());
    app.use(updateLastSeen);
    app.use(checkAuth);

    app.get("/user/me", userController.getMe);
    app.get("/user/verify", userController.verify);
    app.post("/user/signup", signupValidation, userController.create);
    app.post("/user/signin", signinValidation, userController.login);
    app.get("/user/:id", userController.index);
    app.delete("/user/:id", userController.delete);

    app.get("/dialog/:id", dialogController.index);
    app.post("/dialog", dialogController.create);
    app.delete("/dialog/:id", dialogController.delete);

    app.get("/messages", messageController.index);
    app.post("/messages", messageController.create);
    app.delete("/messages/:id", messageController.delete);
};

export default createRoutes;