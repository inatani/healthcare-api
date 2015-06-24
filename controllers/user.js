var Models = require('../models');
var mongoose = require('mongoose');

var UserController_ = {
    createUser : function (req, res) {
      //check if memberID is already exists and insert
      var register = req.body;
      var generatedMemberID = Math.floor(Math.random()*899999+100000);
      register.memberID = generatedMemberID;
      Models.User.findOne({memberID:register.memberID}, function (err, response){
        if (err) throw err;
        if(response){
          res.status(200).send({error:"memberID already exists"});
          return
        }
        var user = new Models.User(req.body);
        user.save(function (err, response) {
            if (err) throw err;
            console.log("Create User Result "+JSON.stringify(response));
            //res.status(200).send({status:"success"});
        });

      });
    },
    getUser : function (req, res) {
        Models.User.find(function (err, response) {
            if(err) throw err;
            res.status(200).send(response)
        });
    },
    getUserByID : function (req, res){
      var id = req.params.id;
      Models.User.findOne({memberID:id}, function (err, response){
        if (err) throw err;
        res.status(200).send(response);
      });
    },
    updateUserByID : function (req, res){
      var user = new Models.User(req.body);
      Models.User.findOneAndUpdate({memberID:req.params.id},{$set:req.body},{upsert:true},function(err, response){
        if(err) throw err;
        res.status(200).send({status:"success"});
      }); 
    },
    removeUserByID : function(req,res){
      Models.User.findOneAndRemove({memberID:req.params.id},function(err, response){
        if(err) throw err;
        res.status(200).send({status:"success"});
      });
    },
    registerUser : function(req, res){
      UserController_.createUser(req);
      console.log("Registration successful!!");
      res.status(200).send({record:"success"});
    }
};

module.exports = UserController_;
