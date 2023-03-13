const express = require('express');
const dbconnect = require('./mongo.js');
const cors = require('cors');
require('dotenv').config();
const app = express()
const PORT = process.env.PORT;
const router = require('./router.js')
app.use(cors())
app.use(express.json())
app.use(router);


dbconnect();
app.listen(PORT, ()=> console.log(`Server UP. Running at port: ${PORT}`));

