var models = require('../models');

module.exports = {

 images: {
    get: ((req, res) => {
      models.get(function(err, results) {
        if (err) { 
          console.log(err)
        }
        res.json(results);
      });
    }),
    post: ((req, res) => {
      var params = [req.body.id, req.body.image];
      models.post(params, (err, results) => {
        if (err) { 
          console.log(err)
        }
        res.sendStatus(201);
      });
    }),
    put: ((req, res) => {
        var params = [req.body.id, req.body.image];
        models.put (params, (err, results) => {
            if (err) {
              console.log(err)
            }
            res.sendStatus(201)
        })
    }),
    delete: ((req, res) => {
        var params = [req.body.id, req.body.image];
        models.delete(params, (err, results) => {
            if(err) {
              console.log(err)
            }
            res.sendStatus(201)
        })
    })
  }
}
