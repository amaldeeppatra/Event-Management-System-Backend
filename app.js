const express = require("express");
const app = express();
const PORT = 5000;

const userRoute = require("./routes/userRoute")


app.get("/", (req, res) => {
    res.json("Hello World")
})

app.use("/user", userRoute)


app.listen(PORT, () => console.log(`Server running at ${PORT}`));