const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

//test route 

app.get("/", (req, res) => {
    res.send("APi is Working")
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on PORT http://localhost:5000")
})