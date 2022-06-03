const express = require('express');
// const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/saveSearch', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11


mongoose.set('debug', true);

app.use(require('./sports-cards-app/src/index'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));