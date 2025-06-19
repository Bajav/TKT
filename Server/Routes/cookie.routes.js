import express from 'express';
import { cookieController,readCookie,deleteCookie } from '../Controllers/cookie.controller.js';

const router = express.Router();

router.post('/createCookie',cookieController);
router.get('/findCookie',readCookie);
router.get('/deleteCookie',deleteCookie);

export default router;