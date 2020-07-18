const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT,function () {
    console.log("server is running...");
});
app.use(express.static("public"));
// sử dụng ejs làm view engine
app.set("view engine","ejs");

app.get("/",function (req,res) {
    res.render("home");
});
