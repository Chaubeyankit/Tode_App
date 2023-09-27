const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URI

const connectToMongo = () => {
      mongoose.connect(mongoURL, () => {
            console.log("Connectd to db")
      })
}
module.exports = connectToMongo;