const mongoose = require("mongoose");

const Database = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    });
    if (connect) {
      console.log("Database connection successful");
    }
  } catch (error) {
    console.log(`Database connection error : ${error}`);
  }
};

module.exports = Database;
