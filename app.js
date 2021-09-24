const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Header', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST', 'PUT', 'DELETE', 'PATCH');
  next();
})

app.use(bodyparser.json());

app.post('/aoi/stuff', (req, res, next) => {
  console.log(req.body);
})

app.use('/api/reciepes', (req, res, next) => {
  const reciepes = [
    {
      _id: '1',
      title: 'Choux de Bruxelles',
      description: 'Hello world !'
    },
    {
      _id: '2',
      title: 'Noix de saint jacques',
      description: 'Hello earth !'
    }
  ]
})

module.exports = app;
