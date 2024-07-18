const express = require("express");
const app = express();
const PORT = 5000;

const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const userRoute = require("./routes/userRoute")
const formRoute=require("./routes/FormRoute");

mongoose.connect("mongodb+srv://Amaldeep:rPs33uXSCb67IarU@cluster0.qhogxfp.mongodb.net/event-management-system?retryWrites=true&w=majority&appName=Cluster0").then((e) => console.log("Mongodb connected"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));

app.get("/", (req, res) => {
    res.json("Hello World")
})

app.use("/user", userRoute)

app.use("/api",formRoute);


app.listen(PORT, () => console.log(`Server running at ${PORT}`));