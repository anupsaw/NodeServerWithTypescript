import * as express from 'express';
import { Middleware } from './middelware'

export class Server {

    private app: any;

    start(port: number = 3000) {
        this.app = express();
        this.app.listen(port)
        this.initialize();
    }


    private listen(port: number = 3000) {
        this.app.listen(port, () => {
            console.log('Started listening on port: ' + port);
        });
    }

    private initialize() {
        const middleware =  new Middleware();
        this.app.use(Middleware);
    }


}








// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
// var fs = require('fs');


// // custom require files
// var config =  requireFile('/config/config.js')();
// //var fsapi = requireFile('/api/server-file-system.js')(config);

// var api = requireFile('/api/route.js')(config);

// var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// app.get('/', function (req, res) {

//     console.log('I am here');
//     res.writeHead(404, 'file not found');
//     res.end();

// })


// //app.use('/api', fsapi);
// app.use('/api', api);


// module.exports = {
//     config: config,
//     app: app
// }


// // function
// function requireFile(name){
// 	return require(__dirname  +   name);
// }