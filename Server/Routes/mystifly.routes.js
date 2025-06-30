import e from 'express';
import startSession from '../Controllers/mytifly.controller.js';

const router = e.Router();

router.get("/createsession",startSession);

export default router;