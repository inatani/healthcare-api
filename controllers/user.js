var models = require('../models');
var mongoose = require('mongoose');

var UserController_ = {
    createUser : function (req, res) {
        var user = new models.user(req.body);
        user.save(function (err, response) {
            if (err) throw err;
            console.log("Create User Result "+JSON.stringify(response));
            res.status(200).send({status:"success"});
        });
    },
    getUser : function (req, res) {
        models.user.find(function (err, response) {
            if(err) throw err;
            res.status(200).send(response)
        });
    }
};

module.exports = UserController_;