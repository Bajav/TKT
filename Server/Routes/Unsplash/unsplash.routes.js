import { searchUnsplashImages } from "../../Controllers/Unsplash/unsplash.controller.js";
import {Router} from "express";
const router = Router();

router.get('/unpsplash',searchUnsplashImages);
export default router;