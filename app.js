var express         = require("express"),
    app             = express(), 
    bodyParser      = require("body-parser"),
    // mongoose        = require("mongoose"),
    serveStatic     = require('serve-static'),
    nodemailer      = require('nodemailer')
    
app.use(express.static('public'))     
// mongoose.connect("mongodb://localhost/marsil", {useNewUrlParser: true});
app.use (bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
   res.render("index");
});

var g_key =process.env.G_KEY;

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Marsil SA server has started !!!"); 
});