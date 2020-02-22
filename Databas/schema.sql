CREATE TABLE listings (
listingid SERIAL PRIMARY KEY,
listingName VARCHAR(200) NOT NULL
);

CREATE TABLE image_gallery(
    listing_id INT ,
   id serial PRIMARY KEY,
   title VARCHAR (200)  NOT NULL,
   helpful INT  NOT NULL,
   category VARCHAR (355) NOT NULL,
   imageMonth VARCHAR(300) NOT NULL,
   imageDate VARCHAR(200) NOT NULL,
   source VARCHAR (200) NOT NULL,
  images VARCHAR(200) NOT NULL
  
);