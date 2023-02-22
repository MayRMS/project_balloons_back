const express = require('express');
require('dotenv-safe').config();
const app = express()
const port = process.env.PORT;






app.listen(port, ()=> console.log(`Server UP. Running at port: ${port}`));

