import {Response, Request} from 'express';
const demo = (req: Request, res: Response): void => {
    res.send('Hello world!');
};

module.exports = {demo};