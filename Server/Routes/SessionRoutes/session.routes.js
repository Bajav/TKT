import { Router } from "express";
import { setSession,getSession } from "../../Controllers/Sessions/app.sessions";
const router = Router();

router.get('/setsession',setSession);
router.post('/setsession',setSession);
router.get('/getsession',getSession);
export default router;