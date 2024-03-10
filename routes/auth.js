

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/helpers");
//this post route will help to register a user;
router.post("/register", async (req, res) => {
    //this code is run when /register api is called as POST request
    //My req.body will be of format {email, password, firstname, lastname}


    const { email, password, firstName, lastName, username } = req.body;

    //step2: Does a user with this email already exist? 
    //if yes, we throw an error;

    const user = await User.findOne({ email: email });
    if (user) {
        //we know status code by default is 200 for res.json()
        return res.status(403).json({ error: "This email already exists" });
    }
    //this is a valid request
    //step3: Create a new user in the DB
    //step3.1: dont store passwords in plain text
    //convert plain text pass into a hash;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUserData = {
        email,
        password: hashPassword,
        firstName,
        lastName,
        username,
    };

    const newUser = await User.create(newUserData);

    //Step 4: we want to create the token to return to the user
    const token = await getToken(email, newUser);

    //step 5 : return res to user

    const userToReturn = { ...newUser.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

router.post("/login", async (req, res) => {
    //step 1: get email and pass sent by user from req.body
    const { email, password } = req.body;

    //step 2 : check if user exists, if not , means credential is invalid

    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(403).json({ err: "Invalid credentials" });
    }


    //step 3 : if user exists, check if password is correct?
    //but it is tricky! as our password is stored in DB as in form of hash values;
    //so we cannot directly check as pass == user.pass
    // so bcrypt enabled us to check hash value of both pass;
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(403).json({ err: "Invalid credentials" });
    }
    // step 4: if credentials are correct, return a token to the user 

    const token = await getToken(user.email, user);
    const userToReturn = { ...user.toJSON(), token };
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
})

module.exports = router;