const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');
const validateToken=require('../middleware/validateToken')
router.post('/register',userController.createUser);

router.post('/login',userController.loginUser);

router.get('/getUsers',validateToken.validateToken,userController.getAllUsers);

module.exports=router;