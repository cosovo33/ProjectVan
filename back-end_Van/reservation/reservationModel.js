const mongoose = require('mongoose');

// Define the schema for the Reservation model
const reservationSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  vanID: { type: mongoose.Schema.Types.ObjectId, ref: 'Van', required: true }, // Reference to the Van model
  warehousemanCount: { type: Number, required: true }, // Number of warehousemen
  pickupLocation: { type: String, required: true }, // Pickup location
  dropoffLocation: { type: String, required: true }, // Dropoff location
  date: { type: Date, required: true }, // Date and time of the reservation in ISO 8601 format
  cargoDescription: { type: String, required: true }, // Description of the cargo
  loadingTime: { type: Number, required: true }, // Time necessary to load the cargo
  reservationPeriod: { type: Number, required: true }, // Time necessary to unload the cargo
  distance:{type: Number, default:5, required: true},//approximative distance of transportaion
  estimatedPrice:{type: Number, default:0, required: true}//estimated price of the reservation
});

// Create the Reservation model based on the schema
const Reservation = mongoose.model('Reservation', reservationSchema);

// Export the Reservation model
module.exports = Reservation;
