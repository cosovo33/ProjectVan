const reservationService = require("./reservationService");
const Van = require("../van/vanModel");
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

async function getAll(req, res) {
  try {
    const reservations = await reservationService.getAllReservations();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addOne(req, res) {
  try {
    const newReservation = await reservationService.addOneReservation(req.body);
    // Create the email text using the reservation object
    const emailText = `
      Reservation Details:
      Client Name: ${newReservation.clientFname} ${newReservation.clientLname}
      Pickup Location: ${newReservation.pickupLocation}
      Dropoff Location: ${newReservation.dropoffLocation}
      Date: ${newReservation.date}
      Cargo Description: ${newReservation.cargoDescription}
      Loading Time: ${newReservation.loadingTime} minutes
      Reservation Period: ${newReservation.reservationPeriod} hours
      Distance: ${newReservation.distance} km
      Estimated Price: ${newReservation.estimatedPrice} euros
    `;
    transporter.sendMail({
      from: "noreply <noreply@gmail.com>",
      to: "amine.zaouga@sesame.com.tn",
      subject: "Reservation confirmed",
      text: emailText,
    });
    res.status(201).json(newReservation);
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ error: error.message });
  }
}

async function priceCalculation(req, res) {
  try {
    // Extract reservation data from the request body
    const {
      warehousemanCount,
      reservationPeriod,
      loadingTime,
      distance,
      vanID,
    } = req.body;

    // Fetch the associated van details from the database
    const van = await Van.findById(vanID);
    if (!van) {
      return res.status(404).json({ message: "Van details not found" });
    }

    // Calculate the estimated price
    const estimatedPrice = await reservationService.calculatePrice(
      {
        warehousemanCount,
        reservationPeriod,
        loadingTime,
        distance,
      },
      van
    );

    // Send the estimated price in the response
    res.status(200).json({ estimatedPrice });
  } catch (error) {
    console.error("Error calculating estimated price:", error);
    res.status(500).json({ error: error.message });
  }
}

async function updateOne(req, res) {
  try {
    const updatedReservation = await reservationService.updateOneReservation(
      req.params._id,
      req.body
    );
    res.json(updatedReservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOne(req, res) {
  try {
    const reservation = await reservationService.getOneReservation(
      req.params._id
    );
    res.json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteOne(req, res) {
  try {
    await reservationService.deleteOneReservation(req.params._id);
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteAll(req, res) {
  try {
    await reservationService.deleteAllReservations();
    res.json({ message: "All reservations deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  addOne,
  getAll,
  updateOne,
  getOne,
  deleteOne,
  deleteAll,
  priceCalculation,
};
