const asyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel");
const User = require('../models/userModel');


// to getting access of Chats
const accessChat = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  // Chat Array
  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  // only One Chat is exist
  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    // query it and storage it
    try {
      const createdChat = await Chat.create(chatData);

      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );

      res.status(200).send(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});


// fetch all Chats of use
const fetchChats = asyncHandler(async(req, res) =>{
    try{
        chat.find({users: { $elemMatch: { $eq: req.user._id }}})
        .populate("users","-password")
        .populate("groupAdmin","-password")
        .populate("latestMessage")
        .sort({ updatedAt: -1})
        .then(async (results) => {
            results = await User.populate(results, {
                path: "LatestMessage.sender",
                select: "name pic email",
            });

            res.status(200).send(results);
        });
    }catch(error){

    }
});

module.exports = {accessChat ,fetchChats};
