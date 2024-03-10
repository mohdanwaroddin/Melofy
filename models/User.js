
const mongoose = require("mongoose");

//step1 : require mongoose
//2 : create mongoose schema;
//3 : create model

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
        private: true,
    },
    lastName: {
        type: String,
        required: false,
    },

    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },

    likedSongs: {
        type: String,
        default: "",
    },
    likedPlaylists: {
        type: String,
        default: "",
    },
    subscribedArtists: {
        type: String,
        default: "",
    },
});

const UserModel = mongoose.model("User", User);

module.exports = UserModel;