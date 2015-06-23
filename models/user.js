//register the modules
var mongoose = require("mongoose");

//initiate the collection for user.js

var User_ = new mongoose.Schema({
  firstName:String,
  middleName:String,
  lastName:String,
  dateOfBirth:String,
  address1:String,
  address2:String,
  city:String,
  state:String,
  country:String,
  zipCode:Number,
  emailID:String,
  primaryPhoneNumber:String,
  secondaryPhoneNumber:String,
  password:String,
  userID:String,
  memberID:String,
  mappingID:String,
  relationship:String
});

var userPersonalInformationModel = mongoose.model('user', User_);
module.exports = userPersonalInformationModel;