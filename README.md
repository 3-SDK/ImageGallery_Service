TrippyAdvisor - Image Gallery 
Request (GET)
GET /listings/:listingsid/images
get all the images 
//assuming that this listing has three images
Response  = [{
     id : 1,
     images: '',
     category: 'Hotel & Suites',
     Title: 'Honeymoon suite',
     month: 'Jan'
     date: 2019,
     helpful: 3,
     report: ''
},
    
    { id : 2,
     images: '',
     category: 'Favorites',
     Title: 'Honeymoon suite',
     month: 'Jan'
     date: 2020,
     helpful: 0,
     report: 'it shows participation in illegal activity'
},
{    id : 3,
     images: '',
     category: 'Favorites',
     Title: 'Honeymoon suite',
     month: 'Jan'
     date: 2020,
     helpful: 0,
     report: ''  
}]
POST /listings/:listingid/images
Post or add an new image to the gallery at a particular id (listing)
//assuming that we want to add two images
Req.body = [ {
     images: '',
     category: 'Hotel & Suites',
     Title: 'Honeymoon suite',
     month: 'Jan'
     date: 2019,
     helpful: 3,
     report: ''
},
{
     images: '',
     category: 'Hotel & Suites',
     Title: 'Honeymoon suite',
     month: 'Jan'
     date: 2019,
     helpful: 3,
     report: ''
},
]
Response ("Sucess")
Response ("could not add the images") //if error
DELETE /listings/:listingsid/images
Req.body = {
     imageId: 2
}
Delete an image from the gallery with a particular id



