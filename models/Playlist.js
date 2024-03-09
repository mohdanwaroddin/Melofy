
const mongoose = require("mongoose");

//step1 : require mongoose
//2 : create mongoose schema;
//3 : create model

const Playlist = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    songs: [{
        type: mongoose.Types.ObjectId,
        ref: "song",

    },
    ],
    collaborators: [
        {
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
    ],
});

const PlaylistModel = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModel;