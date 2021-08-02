import express from 'express'
const router = express.Router()
import {demo} from '../controllers/demoController';

router.get('/', demo)

export default router;
