var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/images/:id', controller.images.get);

router.post('/images/:id/', controller.images.post);

router.put('/images/:id/:imageId', controller.images.get);

router.delete('/images/:id/:imageId', controller.images.post);


module.exports = router;