const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { default: connectDB } = require('./config/db.config');
const app = express();

dotenv.config(); // configure dotenv
connectDB(); // Connect to MongoDB
const port = process.env.PORT || 2110;
// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello world!");
});
app.listen(port, () => {
    console.info(`Server running on ${port}.`);
});