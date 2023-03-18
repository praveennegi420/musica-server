require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const path = require('path')
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/songs");
const playListRoutes = require("./routes/playLists");
const searchRoutes = require("./routes/search");
const app = express();

connection();
app.use(cors());
app.use(express.json());
app.use(express.static('./build'))

app.use("/api/users/", userRoutes);
app.use("/api/login/", authRoutes); 
app.use("/api/songs/", songRoutes);
app.use("/api/playlists/", playListRoutes);
app.use("/api/", searchRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/index.html'))
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
