// routes/userRoutes.js
import express  from 'express';
const router = express.Router();
import iataController from '../Controllers/flightController';
// import userController from '../Controllers/userController';

const {getAirlines,getIataCodes} = iataController;

router.get('/iata', iataController.getIataCodes);
// router.post('/', userController.createUser);

export default router;