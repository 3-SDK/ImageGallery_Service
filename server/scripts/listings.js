
const faker = require ('faker')
const fs = require ('fs')

filename = "listings.csv"
//iterate through 3 times to generate the data
for (var i=0; i< 10000000; i++) {
    // let listingId = i;
    let listingName = faker.random.firstname()
    let listingId = i;
    var tempString = `${listingId},${listingName}\n`;
    fs.appendFileSync (filename, tempString )
}
