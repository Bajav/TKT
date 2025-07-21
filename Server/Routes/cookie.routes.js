import {Router} from 'express';
import { getCookies } from '../Controllers/cookie.controller.js';

const router = Router();

router.get('/',getCookies);
router.post('/',getCookies);


export default router;