import { Router } from 'express';
const router = Router();
import { getCharacterByQueryName, getCharacterById } from '../controllers/characterController';

router.get('/characters', getCharacterByQueryName);
router.get('/characters/:id', getCharacterById);


export default router;
