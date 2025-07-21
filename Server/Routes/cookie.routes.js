import {Router} from 'express';
import { getCookies,postCookie } from '../Controllers/cookie.controller.js';

const router = Router();

router.get('/',getCookies);
router.post('/recent-search',postCookie);


export default router;