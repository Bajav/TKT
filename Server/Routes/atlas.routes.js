import {Router} from 'express';
import { checkDbStatus,createUserHandler } from '../Controllers/atlast.controller.js';
const router = Router();

router.get('/atlas-status',checkDbStatus);
router.post('/create-user',createUserHandler);


export default router;
