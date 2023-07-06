const express = require("express");
const { chats } = require("./data/data.js");
const dotenv = require("dotenv");
const connectDB = require("./Config/db.js");
const colors = require('colors') 
const userRoutes = require('./routes/userRoutes')
const { notFound , errorHandler } = require('./middleware/errorMiddleware')

dotenv.config();
connectDB();
const app = express();

//tell server to accept json data
app.use(express.json());   

// checking Api connection
app.get('/' , (req, res)=>{
    res.send("Jyoti is placed at 24 LPA 🥳")
});


// Api callling for logi and Signin
app.use("/api/user" , userRoutes)

// Add error handling Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT||9000;

app.listen(PORT, console.log(`Server is setup ${PORT}`.yellow.bold));



// // fetch data from server
// app.get('/api/chat',(req,res) =>{
//     res.send(chats);
// });

// // fetching single data
// app.get('/api/chat/:id',(req,res) =>{
//     // console.log(req);
//     const singleChat = chats.find((c) => {
//         return c._id === req.params.id;
//     });
//     res.send(singleChat);
// });