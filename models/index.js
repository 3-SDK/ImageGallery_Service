//functions for the query in db
//connections to psql
//write the actual functions to get post put delete
// var faker = require('faker');
// var Promise = require('bluebird');
const { Pool } = require('pg');
const pool = new Pool({
user: "suhanabhetwal",
  host: "localhost",
  database : "imagegallery",
  port: 5432,
//   "max": 20,
//   "connectionTimeoutMillis": 0,
//   "idleTimeoutMillis": 0
});
// const results =  pool.query ("select * from listings")
// console.log(results)

module.exports = {
listings: {
    getListing: (listingid, callback) => {
    const query = ` Select * from listings where listingid = ${listingid}` 
    pool.query(query, (err, images)=> {
        if(err) {
            callback (err);
        } else {
            callback(null, images)
        }
    })
},
    getListingImage: (listing_id, callback)=> {
    const query = ` Select * from image_gallery where listing_id = ${listing_id}` 
    pool.query(query, (err, images)=> {
        if(err) {
            callback (err);
        } else {
            callback(null, images)
        }
    })
},
    postImage: (imageInfo, callback) => {
        const query = `INSERT INTO image_gallery (listing_id, title, helpful, category, imagemonth, imagedate, source, images) VALUES ('${imageInfo.listing_id}', '${imageInfo.title}', ${imageInfo.helpful}, '${imageInfo.category}', '${imageInfo.imagemonth}', '${imageInfo.imagedate}', '${imageInfo.source}', '${imageInfo.images}'); `
        pool.query(query, (err, images)=> {
            if(err) {
                callback (err);
            } else {
                callback(null, images)
            }
        })
    }
}
}





