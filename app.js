// jshint esversion: 6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.locals.htmlDisplay = html => _.escape(html).replace(/\n/g, '<br>');

const title = "Hello World!";
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const teste = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit. Mauris sit amet massa vitae tortor condimentum lacinia quis. Et ultrices neque ornare aenean euismod elementum nisi. Nam at lectus urna duis convallis convallis tellus id. A erat nam at lectus urna duis. Iaculis eu non diam phasellus. Aliquet nibh praesent tristique magna sit amet purus. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Nec nam aliquam sem et tortor consequat id. Vitae congue mauris rhoncus aenean. At lectus urna duis convallis convallis. Commodo elit at imperdiet dui accumsan. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Sed faucibus turpis in eu. Magnis dis parturient montes nascetur ridiculus mus. Nunc consequat interdum varius sit amet. Aliquam ut porttitor leo a diam sollicitudin tempor id eu.\n\n Morbi tristique senectus et netus et malesuada fames ac turpis. Lacus vestibulum sed arcu non odio euismod. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Quis hendrerit dolor magna eget est lorem ipsum dolor. In pellentesque massa placerat duis ultricies lacus sed turpis. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Phasellus vestibulum lorem sed risus. Id volutpat lacus laoreet non curabitur gravida arcu. Dolor magna eget est lorem ipsum dolor sit. Donec et odio pellentesque diam volutpat commodo sed egestas. Risus viverra adipiscing at in tellus integer. Tortor aliquam nulla facilisi cras fermentum. Congue mauris rhoncus aenean vel elit scelerisque. Ultricies tristique nulla aliquet enim. Eget est lorem ipsum dolor sit. A lacus vestibulum sed arcu non. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.\n\n Tortor id aliquet lectus proin nibh nisl. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Sed euismod nisi porta lorem mollis aliquam ut. Eu augue ut lectus arcu bibendum at varius. Justo laoreet sit amet cursus sit amet. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Eget est lorem ipsum dolor sit. Lorem sed risus ultricies tristique nulla aliquet enim. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Bibendum ut tristique et egestas quis ipsum suspendisse.";

app.get("/", function(req, res) {
  res.render("index", {
    titleContent: title,
    textContent: text,

  });
});



app.get("/about", function(req, res) {
  res.render("about", {
    teste: teste
  });
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
