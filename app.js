const express = require('express');
const http = require('http');
const cors = require('cors');

const port = 4000;

class Server {

    green = "\x1b[32m";

    constructor() {
        this.app = express();
        this.initMiddlewares();
        this.initRoutes();
        this.createServer();
    }

    initRoutes() {
        this.app.use('/api/schedule', require('./schedule/schedule.controller'));
    }

    initMiddlewares() {
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "*")
            next();
        });
        this.app.use(cors());
    }

    createServer() {
        try {
            http.createServer(this.app).listen(port, () => {
                console.log(this.green, `HTTP Server http://localhost:${port}`);
            });
        } catch (e) {
            console.log('e: ', e);
        }
    }

}

new Server();
