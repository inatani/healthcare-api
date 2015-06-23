var MONGODB_URL = "mongodb://"+process.env.MONGO_URL;

var connectDB = {
  DB_URL : MONGODB_URL
};
module.exports = connectDB;
