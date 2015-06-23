var express = require('express');
var router = express.Router();

var routes = {
    user : require("../controllers/user")
};

router.post('/user', routes.user.createUser);
router.get('/user', routes.user.getUser);

module.exports = router;

