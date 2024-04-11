require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const reservationRoutes = require('../reservation/reservationRoutes');
const vanRoutes = require('../van/vanRoutes');
const userRoutes = require('../user/userRoutes');
const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;
// Middleware
app.use(bodyParser.json());

app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// MongoDB connection
mongoose
  .connect(URI)
  .then(() => {
    //@ Callback to execute after connection is established
    console.log("Connected to MongoDB");
    // Start the server once connected to the database
    app.listen(3001, () => {
      //@Port and a Callback Function
      console.log(`Server is running on port 3001`);
    });
  })
  .catch((error) => {
    //@callback to manage the exception after connection rejected
    console.error("Error connecting to MongoDB:", error);
  });
// Mount routes for each collection
app.get("/", (req, res) => {
    res.send("Hello World!");
  });
app.use('/users', userRoutes);
app.use('/vans', vanRoutes);
app.use('/reservations', reservationRoutes);

