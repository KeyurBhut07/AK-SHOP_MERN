const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to mongo ");
  })
  .catch((err) => {
    console.log(err);
    console.log("Failed to connect to mongo");
  });
