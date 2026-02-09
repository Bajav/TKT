import {Router} from 'express';
import { checkDbStatus ,exportAll,importAirlines,importCities,importAirports} from '../../Controllers/MongoAtlas/atlast.controller.js';
const router = Router();

router.get('/atlasstatus',checkDbStatus);
router.get('/exportData',exportAll);
router.get('/airlines',importAirlines);
router.get('/cities',importCities);
router.get('/airports',importAirports);


export default router;
