const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const generateToken = require('../Config/generateToken');

const registerUser = asyncHandler(async(req, res) => {
    const { name , email , password , pic} = req.body;

    // to fill all fields
    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please Enter all the Fields');
    }

    // Does email already exists
    const userExists = await User.findOne({email});

    // if email exist throw error 
    if(userExists){
        res.status(400);
        throw new Error("User already exists");

    }

    // else create new User
    const user = await User.create(
        {
            name,
            email,
            password,
            pic,
        }
    );

    
    // storing values 
    if(user){
        res.status(201).json(
            {
                _id: user. _id,
                name: user.name,
                email: user.email,
                pic: user.pic,
                token:generateToken(user._id),
            }
        );
    }else{
        res.status(400);
        throw new Error("Failed to create the User");

    }

});




// Authantication of password
const authUser = asyncHandler(async (req, res) => {
    const { email , password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })
    }
})



// AllUser - search
// /api/user?search=jyoti
const allUsers = asyncHandler(async(req, res) => {
    const keyword = req.query.search
    ? {
        $or: [
            {name: {$regex: req.query.search, $options: "i"}},
            {email: {$regex: req.query.search, $options: "i"}},

        ],
    }
    : {};

    const users = await User.find(keyword).find({_id: { $ne: req.user._id}});
   res.send(users);
});


module.exports = { registerUser , authUser ,allUsers};