const mongoose = require("mongoose");

const dbconnect = () => {
    mongoose.set('strictQuery', true);
    const conn_str = process.env.DB_CONNECTION;
    mongoose.connect(
        conn_str,
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        },(err) => {
            if (err) {
                console.log("error connecting to the database",err);
            } else {
                console.log("mongodb database is connected");
        }});
}

module.exports = dbconnect;
