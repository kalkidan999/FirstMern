const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const http = require("http");


const userRouter = require("./routers/user")
dotenv.config();
const app = express();
const server = http.createServer(app);
/**
 * connection to dbs
 */
mongoose.connect(process.env.DATABASE_STRING, {
 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connected to database succesfully")
});
/**
 * middleware
 */
app.use(express.json());

/**
 * router middleware
 */
 app.use("/api/v1/users", userRouter);
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("server is running at http://localhost:8000");
})