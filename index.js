//npm init:  node project
//npm i express: expressJs
//use mongoose for connecting node and mongodb
//use express

const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");

// require("dotenv").config();
const cors = require("cors");
const app = express();


const port = 8080;
app.use(cors());
app.use(express.json());

//db,  connection options

mongoose.connect("mongodb+srv://mohdanwaroddin:mohdanwaroddin@cluster0annu.tjpke8h.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0Annu", {}
)
    .then((x) => {
        console.log("Connected to Mongo!");
    })
    .catch((err) => {
        console.log("Error while connecting to Mongo");
    });


let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secretkeyissecret";

passport.use(
    new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({ id: jwt_payload.sub }, function (err, user) {
            //Done:  (error,does user exists)
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));

app.get("/", (req, res) => {

    res.send("Hello World");
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

app.listen(port, () => {
    console.log("node server is running on port " + port);
});



