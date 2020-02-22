const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gallery", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


let gallerySchema =  
{
  listingid: { type: Number , unique: true},
  images: [{
    imageid: {type: Number},
    title: String,
    helpful: Number,
    category:  { type: String, enum: ["Favorites", "Amenities", "Room/Suite"]},
    month: String,
    date: Date,
    source: String,
    images: String
  }]
}

let Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;

// db.galleries.insert({
//   "listingid" : 39081,
// "imageid" : 195401,
// "images" : "https://7-xillow.s3-us-west-1.amazonaws.com/nearbyHouse2.png",
// "category" : "Amenities",
// "helpful" : 0,
// "title" : "Carmela",
// "month" : "Octobers",
// "source" : "Lilianss",
// "date" : "Thu Feb 21 2020 15:55:12 GMT-0800 (PST)"
// })

// //db.questions.find({}).sort({ _id: -1 }).limit(1);


// //mongoimport --host localhost:27017 --db gallery --collection galleries --type csv --headerline --file /Users/suhanabhetwal/Desktop/Hack-Reactor/SDC/gallery/Listing.csv
// //find last value
// //db.galleries.find({}).sort({ imageid: -1 }).limit(1);