const Reservation = require("./reservationModel");

/**
 * Get all reservations.
 * @returns {Promise<Array>} Array of reservations.
 */
async function getAllReservations() {
  return await Reservation.find();
}

/**
 * Add a new reservation.
 * @param {Object} reservationData - Reservation data.
 * @returns {Promise<Object>} Newly created reservation.
 */
async function addOneReservation(reservationData) {
  return await Reservation.create(reservationData);
}

/**
 * Update a reservation.
 * @param {string} reservationId - Reservation ID.
 * @param {Object} reservationData - Updated reservation data.
 * @returns {Promise<Object>} Updated reservation.
 */
async function updateOneReservation(reservationId, reservationData) {
  return await Reservation.findByIdAndUpdate(reservationId, reservationData, {
    new: true,
  });
}

/**
 * Get a reservation by ID.
 * @param {string} reservationId - Reservation ID.
 * @returns {Promise<Object|null>} Reservation object or null if not found.
 */
async function getOneReservation(reservationId) {
  return await Reservation.findById(reservationId);
}

/**
 * Delete a reservation.
 * @param {string} reservationId - Reservation ID.
 * @returns {Promise<void>}
 */
async function deleteOneReservation(reservationId) {
  return await Reservation.findByIdAndDelete(reservationId);
}

/**
 * Delete all reservations.
 * @returns {Promise<void>}
 */
async function deleteAllReservations() {
  return await Reservation.deleteMany();
}
async function calculatePrice(reservation, van) {
  let totalPrice = van.basePrice;
  let periodHour = Math.round(reservation.reservationPeriod / 60);
  if(periodHour===0){
    periodHour=1;
  }
  if (reservation.warehousemanCount === 1) {
    totalPrice += 15 * periodHour  ;
  } else if (reservation.warehousemanCount === 2) {
    totalPrice += 25 * periodHour ;
  }
  if (reservation.loadingTime > 25) {
    let extraCharge = totalPrice * Math.round(reservation.loadingTime / 20) * 0.15;
    totalPrice += extraCharge;
  }
  if (reservation.distance > 5) {
    let extraCharge = Math.round(reservation.distance / 5) * 10;
    totalPrice += extraCharge;
  }
  return totalPrice;
}
module.exports = {
  getAllReservations,
  addOneReservation,
  updateOneReservation,
  getOneReservation,
  deleteOneReservation,
  deleteAllReservations,
  calculatePrice,
};
