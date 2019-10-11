const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(
  cors({
    exposedHeaders: ['x-auth-token'],
  }),
);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to DB'))
  .catch(err => console.error(err));

app.use(express.json());

const port = process.env.port || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
