const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/finalprojectDB", {
  useNewUrlParser: true
}, function() {
  console.log("Connection Sucessful");
});

const finalProject = new mongoose.Schema({
  username: String,
  password: String,
  backimage: {
    type: String,
    default: "images/bgavatar.jpg"
  },
  profileimage: {
    type: String,
    default: "images/avatar.jpg"
  },
  friendsId: {
    type: Array,
    default: [],
    unique: true
  },
  posts: {
    type: Array,
    default: []
  }
});

finalProject.plugin(passportLocalMongoose);

const User = mongoose.model("user", finalProject);

module.exports = User;