const {login, updateDetails, updatePassword, logout, getMe} = require('../controllers/auth')

const {protect, ipAdrees} = require('../middleware/auth');
const router = require('express').Router();

router
    .route('/login')
    .post(login)

router
    .route('/logout')
    .get(protect, logout)

router
    .route('/me')
    .get(protect, getMe)


router
    .route('/updatedetails')
    .put(protect, updateDetails)


router
    .route('/updatepassword')
    .put(protect, updatePassword)

    
module.exports = router;
