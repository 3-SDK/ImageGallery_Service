const path = require("path");
const DIST_DIR = path.join(__dirname, "/../client/dist");
const express = require("express");
const parser = require("body-parser");
const app = express();
const port = 6969;
const db = require("./db.js");

app.use("/:id/", express.static(DIST_DIR));
app.use(parser.urlencoded({ extended: true }));

app.use(express.json());

//getting all the photos from that gallery
app.get("/gallery/:id/", (req, res) => {
  let galleryId = req.params.id;
  getImages.fetch ((err,results) => {
    if(err) {
        console.log(err)
      } else {
        res.send(results)
      }
   })
  });
//posting a new image in the gallery (based on the id given)
app.post("/gallery/:id", (req, res) => {
    let galleryId = req.params.id;
   getImages.fetch (galleryId, (err,results) => {
    if(err) {
        console.log(err)
      } else {
        res.send(results)
      }
   })
    })
  // updating a listing gallery by updating the images from the gallery (deleting and adding new image on that id)
  app.put("/gallery/:id", (req, res)=> {
  
      
  })
  app.

app.listen(port, () => {
  console.log(`Express listening on ${port}`);
});

module.exports = app;
