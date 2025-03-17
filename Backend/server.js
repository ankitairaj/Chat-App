const express = require("express");
var cors = require("cors");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.use(cors());

app.get('/', (req, res) => {
    res.send("API is running sussessfully")
});

app.get('/api/chats', (req, res) => {
    console.log("Fetching Chats");
    res.send(chats);
});

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat);
});

const PORT = 5001;
app.listen(PORT, console.log(`Server start on PORT ${PORT}`));
