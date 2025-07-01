import e from 'express';
import {startSession,searchFlight} from '../Controllers/mytifly.controller.js';

const router = e.Router();

router.get("/createsession",startSession);
router.get("/rountrip",searchFlight);

export default router;