var express = require('express');
var router = express.Router();
var mark = require('../markschema');

router.get('/mark', function(req, res) {
    console.log('GET /mark');
    mark.find({}, 'title modified', (error, data) => {
        if (error) {
            res.sendStatus(404);
        } else {
            res.send({ marks: data });
        }
    }).sort({modified: -1});
});

router.get('/mark/:id', function(req, res) {
    console.log(`GET /mark/${req.params.id}`);
    mark.findById(req.params.id, 'title body modified', (error, data) => {
        if (error || !data) {
            res.sendStatus(404);
        } else {
            res.send(data);
        }
    });
});

router.post('/mark', function(req, res) {
    console.log('POST /mark');
    console.log(`title: ${req.body.title}`);
    console.log(`body: ${req.body.body}`);
    var newmark = new mark({
        title: req.body.title,
        body: req.body.body,
        modified: new Date()
    });
    newmark.save(error => {
        if (error) {
            res.sendStatus(404);
        } else {
            res.sendStatus(200);
        }
    });
});

router.put('/mark/:id', function(req, res) {
    console.log(`PUT /mark/${req.params.id}`);
    mark.findById(req.params.id, 'title body', (error, data) => {
        if (error) {
            res.sendStatus(404);
        } else {
            if (req.body.title) {
                data.title = req.body.title;
            }
            if (req.body.body) {
                data.body = req.body.body;
            }
            data.save(error => {
                if (error) {
                    res.sendStatus(404);
                } else {
                    res.sendStatus(200);
                }
            });
        }
    });
});

router.delete('/mark/:id', (req, res) => {
    console.log(`DELETE /mark/${req.params.id}`);
    mark.remove({ _id: req.params.id }, error => {
        if (error) {
            res.sendStatus(404);
        } else {
            res.sendStatus(200);
        }
    });
});

router.get('/favicon.ico', (req, res) => res.status(204));

module.exports = router;
