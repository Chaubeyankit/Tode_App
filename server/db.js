const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/todo_list";
const connectToMongo = () => {
      mongoose.connect(mongoURL, () => {
            console.log("Connectd to db")
      })
}
module.exports = connectToMongo;
