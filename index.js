const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const projectsRouter = require('./projects/projectsRouter');
const actionsRouter = require('./actions/actionsRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
  res.status(200).send('Welcome to the projects sprint API');
})

server.listen(8000, _ => console.log('\nServer is running on port 8000\n'))