// routes/userRoutes.js
import express  from 'express';
const router = express.Router();
import userController from '../Controllers/userController';

// We use router from express to select which 
// route handles which req and response

router.get('/user', userController.getAllUsers);
router.post('/user', userController.createUser);

module.exports = router;