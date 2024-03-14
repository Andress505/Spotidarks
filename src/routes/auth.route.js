//node modules
const router = require('express').Router();

//custom modules
const { auth, callback } = require('../controllers/auth.controller');

router.get('/', auth);
router.get('/callback', callback);

module.exports = router;