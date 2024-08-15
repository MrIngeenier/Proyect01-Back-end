import express from 'express';
const router = express.Router();
import usersController from '../controllers/users.controllers.js'



router.get('/allUsers', usersController.getAllUsers);
router.get('/admin', usersController.getAllAdmin);
router.get('/ping', usersController.ping);


export default router; // Exporta el router como valor por defecto
