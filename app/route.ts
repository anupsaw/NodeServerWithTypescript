import * as express from 'express';
import { Request, Response, NextFunction } from 'express';


export class AppRouter {

    private router: any;

    constructor() {
        this.router = express.Router();
    }

    route(path: String, fn: Function) {
        this.router.route('/')
            .get((req: Request, res: Response, next: NextFunction) => {

                res.send('sent my first response');

            })
    }

}

