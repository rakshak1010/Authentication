const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const secret = "SomeStupidStringToStoreMySecret";

const UserSchema = new mongoose.Schema(
  {
    email: String,
    password: String
  }
);

UserSchema.plugin(encrypt, {secret: secret, encryptedFields: ['password'] });

module.exports = mongoose.model("User", UserSchema);
