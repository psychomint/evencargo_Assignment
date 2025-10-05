const express = require("express");
const cors = require("cors");
const db = require("./DB/DB_CONNECTION");
const app = express();
require('./models/productModel');

app.use(express.json());
app.use(cors());


const productRoute = require('./routes/productsRoutes');
app.use('/api',productRoute);

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