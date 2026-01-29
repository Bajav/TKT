import { searchUnsplashImages,searchUnsplashImagesVariety } from "../../Controllers/Unsplash/unsplash.controller.js";
import {Router} from "express";
const router = Router();

router.get('/unpsplash',searchUnsplashImages);
router.get('/unpsplashmult',searchUnsplashImagesVariety);
export default router;