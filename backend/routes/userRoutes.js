const express = require('express')
const { registerUser ,authUser} = require('../controllers/userControllers')

const router = express.Router();


router.route('/').post(registerUser).get(allUsers);
router.post('/login',authUser)

// router.route("/").get(allUsers);

module.exports = router;