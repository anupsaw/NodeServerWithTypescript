import * as express from 'express';
import * as bodyParser from 'body-parser';
import { AppRouter } from './route'


export class Middleware {

    private app: any;

    constructor() {
        this.app = express();
        this.initialize();
    }

    initialize() {
        const route = new AppRouter();
        //bodyParser
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(route.initialize);
    }



}