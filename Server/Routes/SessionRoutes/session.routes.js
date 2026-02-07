import { Router } from "express";
import { saveuserdata,checkSession } from "../../Controllers/Sessions/sessions.controller.js";
const router = Router();

router.get('/setsession',saveuserdata);
router.post('/setsession',saveuserdata);
router.get('/getsession',checkSession);
export default router;