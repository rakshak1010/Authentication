const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require('mongoose-findorcreate');

const UserSchema = new mongoose.Schema(
  {
  	username: String,
    email: String,
    password: String,
    googleId: String,
    githubId: String
  }
);

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

User = mongoose.model("User", UserSchema);

module.exports = User;
