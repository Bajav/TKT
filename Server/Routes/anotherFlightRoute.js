// routes/userRoutes.js
import express  from 'express';
const router = express.Router();
import flightController from '../Controllers/flightController';
// import userController from '../Controllers/userController';

router.get('/iata', flightController.getIataCodes);
// router.post('/', userController.createUser);

export default router;