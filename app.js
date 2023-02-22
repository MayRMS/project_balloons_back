const express = require('express');
require('dotenv').config();
const app = express()
const PORT = process.env.PORT;
const router = require('./router.js')
app.use(express.json())
app.use(router);



app.listen(PORT, ()=> console.log(`Server UP. Running at port: ${PORT}`));

