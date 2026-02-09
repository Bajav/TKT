import {Router} from 'express';
import { checkDbStatus ,exportAll,importAirlines,importCities,importAirports} from '../../Controllers/MongoAtlas/atlast.controller.js';
const router = Router();

router.get('/atlasstatus',checkDbStatus);
router.get('/exportData',exportAll);
router.get('/atlas/airlines',importAirlines);
router.get('/atlas/cities',importCities);
router.get('/atlas/airports',importAirports);


export default router;
