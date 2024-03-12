
const mongoose = require("mongoose");

//step1 : require mongoose
//2 : create mongoose schema;
//3 : create model

const Song = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    track: {
        type: String,
        required: true,
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

const SongModel = mongoose.model("Song", Song);

module.exports = SongModel;