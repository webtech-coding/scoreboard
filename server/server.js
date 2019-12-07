const dotenv = require("dotenv");
dotenv.config();

const database = require("./database")();

const app = require("./app");

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
