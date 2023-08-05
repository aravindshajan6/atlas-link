//for routes relating to  only user

const express = require('express');
const router = express.Router();
const { postUserDetails, getSignupForm, getUserLogin, postUserLogin} = require('../controllers/userController');


router.get('/', getSignupForm);
router.post('/', postUserDetails);
router.get('/login', getUserLogin);
router.post('/login', postUserLogin)

module.exports = router;