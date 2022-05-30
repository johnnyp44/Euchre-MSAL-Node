const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
url = "mongodb://"+process.env.COSMOS_USER+":"+process.env.COSMOS_PASSWORD+"@euchrestats.mongo.cosmos.azure.com:10255/EuchreStats?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@euchrestats@"

const connectDB = () => {
  return mongoose
    .connect(url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log(`database connected successfully`))
    .catch((err) => console.log("db connection failed: with error " + err.message));
};
module.exports = connectDB;
