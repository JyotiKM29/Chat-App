const express = require("express");
const { chats } = require("./data/data");

const app = express();

// checking Api connection
app.get('/' , (req, res)=>{
    res.send("Jyoti is placed at 24 LPA 🥳")
});


// fetch data from server
app.get('/api/chat',(req,res) =>{
    res.send(chats);
});

// fetching single data
app.get('/api/chat/:id',(req,res) =>{
    // console.log(req);
    const singleChat = chats.find((c) => {
        return c._id === req.params.id;
    });
    res.send(singleChat);
});


app.listen(8000, console.log("Server is setup"));
