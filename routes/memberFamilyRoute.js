const express=require('express');
const router=express.Router();

const memberController=require('../controllers/familyMemberController');

router.get('',memberController.getAllFamilyMembers);
router.post('',memberController.createFamilyMember);

module.exports=router;