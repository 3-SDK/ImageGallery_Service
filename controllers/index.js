var models = require('../models');

module.exports = {

  messages: {
    get: ((req, res) => {
      models.images.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    }),
    post: ((req, res) => {
      var params = [req.body.id, req.body.image];
      models.images.post(params, (err, results) => {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }),
    put: ((req, res) => {
        var params = [req.body.id, req.body.image];
        models.images.put (params, (err, results) => {
            if (err) {/*do something */}
            res.sendStatus(201)
        })
    }),
    delete: ((req, res) => {
        var params = [req.body.id, req.body.image];
        models.images.delete(params, (err, results) => {
            if(err) {/*do something*/}
            res.sendStatus(201)
        })
    })
  }
}
