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

app.get("/vedoanhnghiep",function (req,res) {
    res.render("vedoanhnghiep1");
});

app.get("/vepaddock",function (req,res) {
    res.render("vepaddock1");
});

app.get("/vekhandai",function (req,res) {
    res.render("vekhandai1");
});

app.get("/vedoanhnghiep",function (req,res) {
    res.render("vephothong1");
});

app.get("/signin",function (req,res) {
    res.render("prj_signin");
});