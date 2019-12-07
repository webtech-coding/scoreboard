const mongoose = require("mongoose");

const Database = async () => {
  const connect = await mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  if (connect) {
    console.log("Database connection successful");
  } else console.log("Database connection error");
};

module.exports = Database;
