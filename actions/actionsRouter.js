const express = require('express');

const db = require('../data/helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
  db.get()
    .then(actions => res.status(200).send(actions))
    .catch(err => res.status(500).json({errorMessage: 'Could not retrieve list of actions at this time.', error: err}));
})

router.post('/', (req, res) => {
  if(!req.body.project_id || !req.body.description || !req.body.notes) {
    res.status(400).json({errorMessage: 'Please provide a valid project ID, a description and some notes'});
  } else {
    if(req.body.description.length > 128) {
      res.status(400).json({errorMessage: 'Description too long, please make sure your description is no more than 128 characters long.'});
    } else {
      db.insert(req.body)
        .then(newAction => res.status(201).json(newAction))
        .catch(err => res.status(500).json({errorMessage: 'Could not create an action at this time.'}));
    }
  }
})

module.exports = router;