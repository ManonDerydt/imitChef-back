const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !'
  });
});

server.listen(process.env.PORT || 3000);
