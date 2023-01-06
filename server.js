const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const logger = require('./middleware/logger');
const router = require('./routes/bootcamps');
require('dotenv').config();

const app = express();

app.use(logger)
app.use(express.json());
app.use(errorHandler)
app.use('/api/v1/bootcamps',router)



connectDB();


const PORT = 3000

app.listen(PORT,console.log(`running on ${PORT}`));