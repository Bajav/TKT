import express from 'express';
import { cookieController,readCookie } from '../Controllers/cookie.controller.js';

const router = express.Router();

router.post('/createCookie',cookieController);
router.get('/findCookie',readCookie);

export default router;