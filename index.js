const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const todoRouts = require('./routes/todos');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(todoRouts);
async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://mern123:mern123@node-mongo-app.yykyl.mongodb.net/todos',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    app.listen(PORT, () => {
      console.log('Server has been started ... ');
    });
  } catch (error) {
    console.log(error);
  }
}
start();
