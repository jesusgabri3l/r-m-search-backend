import {Response, Request} from 'express';
import R_M_API from '../../../services/R&MApi';

const getCharacterByQueryName = async (req: Request, res: Response): Promise<void> => {
    try {
        const { data } = await R_M_API.getCharacterInfo(`?name=${req.query.q}`);
        const characters = [];
        for(let i = 0; i < 4; i++){
            characters.push(data.results[i]);
        }
        res.json(characters);
    } catch (err: any) {
        res.sendStatus(err.response?.status);
    }
};
const getCharacterById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { data: character } = await R_M_API.getCharacterInfo(`/${req.params.id}`);
        res.json(character);
    } catch (err: any) {
        res.sendStatus(err.response.status);
    }
};

export {getCharacterByQueryName, getCharacterById};