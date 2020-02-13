var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/gallery/:id', controller.messages.get);

router.post('/gallery/:id/', controller.messages.post);

router.put('/gallery/:id/:imageId', controller.users.get);

router.delete('/gallery/:id/:imageId', controller.users.post);


module.exports = router;