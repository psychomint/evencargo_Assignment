const express = require("express");
const cors = require("cors");
const db = require("./DB/DB_CONNECTION");

const app = express();

app.use(express.json());
app.use(cors());


//Setup connection

const PORT = process.env.PORT || 5050;

db.authenticate()
.then(() => {
    console.log("Database connected successfully.");
    return db.sync({ force: false });
  })
.then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
.catch((err) => {
    console.error("Error connecting to database:", err);
  });