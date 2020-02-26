const models = require('../models/index.js');

module.exports = {
  listings: {
    getListing:  ((req, res) => {
    const listingid = req.params.listingid;
      models.listings.getListing(listingid, (err, results) => {
        if (err) { 
          console.log('getListing', err)
          res.status(500).send(err);
        }else {
          console.log(`GET listing w/ id of ${listingid}`)
       res.status(200).send(results);
        }
      });
    }),
    getImage: ((req,res) => {
      const listing_id = req.params.listing_id;
      models.listings.getListingImage(listing_id, (err, results) => {
        if (err) { 
          console.log('getListing', err)
          res.status(500).send(err);
        }else {
          console.log(`GET listing w/ id of ${listing_id}`)
       res.status(200).send(results);
        }
      });

    }),
    postImage: ((req, res) => {
      const imageInfo = req.body;
      console.log(imageInfo)
      models.listings.postImage(imageInfo, (err, results) => {
        if(err) {
          console.log('postImage', err)
          res.status(500).send(err);
        }else {
          console.log(`POST image info id of ${imageInfo.listing_id}`)
          res.status(200).send(results);
        }
      })
    })
  }
}


  

