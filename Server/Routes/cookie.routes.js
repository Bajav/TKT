import express from 'express';
import { cookieController,readCookie,deleteCookie } from '../Controllers/cookie.controller.js';
// import { startAtlas } sfrom '../Controllers/atlast.controller.js';
// import { migrateData } from '../Controllers/migrate.controller.js';
const router = express.Router();

router.post('/createCookie',cookieController);
router.get('/findCookie',readCookie);
router.get('/deleteCookie',deleteCookie);
// router.get('/startAtlas',startAtlas);
// router.get('/migrateData',migrateData);

export default router;