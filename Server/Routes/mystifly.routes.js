import e from 'express';
import {revalidateFlight,searchFlight} from '../Controllers/mytifly.controller.js';

const router = e.Router();

router.get("/validate",revalidateFlight);
router.get("/rountrip",searchFlight);

export default router;