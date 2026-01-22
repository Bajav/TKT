import { Router } from "express";
import { setSession,getFlightSession } from "../../Controllers/Sessions/app.sessions.js";
const router = Router();

router.get('/setsession',setSession);
router.post('/setsession',setSession);
router.get('/getsession',getFlightSession);
export default router;