import {Router} from 'express';
import { checkDbStatus,createUserHandler,findUsers } from '../Controllers/atlast.controller.js';
const router = Router();

router.get('/atlas-status',checkDbStatus);
router.post('/create-user',createUserHandler);
router.get('/find-user',findUsers);


export default router;
