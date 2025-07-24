import {Router} from 'express';
import { getCookies,findCookies } from '../Controllers/cookie.controller.js';

const router = Router();

router.get('/',findCookies);
router.post('/',getCookies);


export default router;