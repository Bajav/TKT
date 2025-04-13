// routes/userRoutes.js
import express  from 'express';
const router = express.Router();
import userController from '../Controllers/userController';

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;