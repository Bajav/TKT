import {Router} from 'express';
import { checkDbStatus } from '../Controllers/atlast.controller.js';
const router = Router();

router.get('/atlas-status',checkDbStatus);

export default router;
