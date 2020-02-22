const fs = require("fs");
const faker = require("faker");
const csvWriter = require('csv-write-stream');
var writer = csvWriter();

const dataGen =() => {
  writer.pipe(fs.createWriteStream('Listing.csv'));
  var id = 1;
for (var i = 1; i <= 10000000; i++) {
  
  for (var j = 1; j <= 5; j++) {
    writer.write ({
      listingid: i,
      imageid: id++,
       images: [`https://7-xillow.s3-us-west-1.amazonaws.com/img1.jpeg `,`https://7-xillow.s3-us-west-1.amazonaws.com/img2.jpg `, `https://7-xillow.s3-us-west-1.amazonaws.com/img7.jpeg  `,`https://7-xillow.s3-us-west-1.amazonaws.com/nearbyHouse2.png `]
   [ Math.floor(Math.random() * 4)] ,
    category : ["Favorites", "Amenities", "Room/Suite"][
        Math.floor(Math.random() * 3)
      ],
      helpful : Math.floor(Math.random() * 1 + 0.5),
    title : faker.name.firstName(),
   month : faker.date.month(),
   source : faker.name.firstName(),
   date : faker.date.recent()
    })
    }
    if (i % 100000 === 0) {
      console.log("loaded: " + i);
    }
  }
    writer.end();
    console.log('done')

}

dataGen();