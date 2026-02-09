import {Router} from 'express';
import { checkDbStatus ,exportAll} from '../../Controllers/MongoAtlas/atlast.controller.js';
const router = Router();

router.get('/atlasstatus',checkDbStatus);
router.get('/exportData',exportAll);


export default router;
