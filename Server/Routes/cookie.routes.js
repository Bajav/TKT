import {Router} from 'express';
import { storeUser,findCookies } from '../Controllers/cookie.controller.js';

const router = Router();

router.get('/',findCookies);
router.post('/',storeUser);


export default router;