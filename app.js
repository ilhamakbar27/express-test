const express = require('express');
const app = express();
const port = 3000;
const Controller = require('./controller/controller')
const errorHandler = require('./middleware/errorHandler')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', Controller.getbooks);
app.get('/buku', Controller.getbooks);
app.get('/buku/:id', Controller.getBookById);
app.post('/buku', Controller.postbooks);
app.put('/buku/:id', Controller.editbooks);
app.delete('/buku/:id', Controller.deletebooks);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

 