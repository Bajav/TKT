import e from 'express';
import {revalidateFlight,searchFlight,createSession} from '../Controllers/mytifly.controller.js';

const router = e.Router();

router.get("/validate",revalidateFlight);
router.get("/rountrip",searchFlight);
router.get("/createsession",createSession);

export default router;