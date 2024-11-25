const express=require('express');
const router=express.Router();
const memberEducationController=require('../controllers/membersEducationController')

router.get('',memberEducationController.getEducationDetails);
router.post('',memberEducationController.createEducationDetails);

module.exports=router;