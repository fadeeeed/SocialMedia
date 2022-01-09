const express = require('express');
const router = express.Router();

const cors = require('cors')

const user = require("../controllers/usersController")

router.post('/register',cors(), user.signUp);
router.post('/login',cors(),user.logIn);
router.post('/getUser',cors(),user.getUser);

module.exports = router;