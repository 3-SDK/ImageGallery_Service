require("newrelic");
const express = require('express');
const path = require('path');
const app = express();
// const morgan = require('morgan');
const PORT = 6969;
const bodyParser = require('body-parser');
const controller = require('../controllers/index.js');

// app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Get info about a listing (id, name)
 app.get('/listings/:listingid', controller.listings.getListing); 

 //get all images from a particular listing
app.get('/listings/imagegallery/:listing_id', controller.listings.getImage )

//POST image into a particular listing 
app.post('/listings/imagegallery/images', controller.listings.postImage)



app.listen(PORT, () => {
  console.log(`Express listening on ${PORT}`);
});

