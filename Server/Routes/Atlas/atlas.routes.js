import {Router} from 'express';
import { checkDbStatus } from '../../Controllers/MongoAtlas/atlast.controller.js';
const router = Router();

router.get('/atlasstatus',checkDbStatus);


export default router;
