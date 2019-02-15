const express = require('express');

const db = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
  db.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json({errorMessage: 'Could not retrive list of projects at this time', error: err}));
})

router.post('/', (req, res) => {
  if(!req.body.name || !req.body.description) {
    res.status(400).json({errorMessage: 'Please provide a name and description.'})
  } else {
    db.insert(req.body)
      .then(newProject => res.status(201).json(newProject))
      .catch(err => res.status(500).json({errorMessage: 'Could not create a project at this time', error: err}))
  }
})

router.get('/:id', (req, res) => {
  db.get(req.params.id)
    .then(project => {
      if(project) {
        res.status(200).json(project);
      } else {
        res.status(404).json({errorMessage: 'The project with the specified ID could not be found.'})
      }
    })
    .catch(err => res.status(500).json({errorMessage: 'Could not retrieve the project with the specified ID at this time', error: err}));
})

router.put('/:id', (req, res) => {
  if(!req.body.name || !req.body.description) {
    res.status(400).json({errorMessage: 'Please provide a name and description.'})
  } else {
    db.update(req.params.id, req.body)
      .then(updatedProj => {
        if(updatedProj) {
          res.status(200).json(updatedProj)
        } else {
          res.status(404).json({errorMessage: 'The project with the specified ID could not be found.'})
        }
      })
      .catch(err => res.status(500).json({errorMessage: 'Could not update the project with the specified id at this time', error: err}))
  }
})

router.delete('/:id', (req, res) => {
  db.remove(req.params.id)
    .then(count => {
      if(count > 0) {
        res.status(200).json({message: `Succesfully deleted ${count} project.`})
      } else {
        res.status(404).json({errorMessage: 'The project with the specified ID could not be found'});
      }
    })
    .catch(err => res.status(500).json({errorMessage: 'Could not delete the project with the specified ID at this time', error: err}));
})

module.exports = router;