import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Modal,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

// initializing the user state
const initialUserState = {
  CFname: "",
  CLname: "",
  email: "",
  phone: "",
};
// initializing the formData state
const initialFormData = {
  userID: "",
  vanID: "",
  warehousemanCount: 0,
  pickupLocation: "",
  dropoffLocation: "",
  date: "2024-03-01T00:00",
  cargoDescription: "",
  loadingTime: 0,
  reservationPeriod: 0,
  distance: 0,
  estimatedPrice: 0,
};

const ReservationForm = ({ vans }) => {
  //definition of  the states
  const [user, setUser] = useState(initialUserState); //to use in the user creation api call
  const [formData, setFormData] = useState(initialFormData); // to store the form data changes
  const [openModal, setOpenModal] = useState(false); //set to true after price estimation, when true a popup is rendred with details of reservation
  const [reservation, setReservation] = useState(null); //the reservation details to send in a post request to reservation create api
  const [resv, setResv] = useState(null); //to store the estimated price value

  const handleChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //update the state's key:value based on the input name attribute and value
  };

  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const confirmSubmission = async (e) => {
    const reservationPayLoad = {
      userID: formData.userID,
      vanID: formData.vanID,
      warehousemanCount: formData.warehousemanCount,
      pickupLocation: formData.pickupLocation,
      dropoffLocation: formData.dropoffLocation,
      date: formData.date,
      cargoDescription: formData.cargoDescription,
      loadingTime: formData.loadingTime,
      reservationPeriod: formData.reservationPeriod,
      distance: formData.distance,
      estimatedPrice: formData.estimatedPrice,
      clientFname: reservation.user.CFname,
      clientLname: reservation.user.CLname,
    };
    try {
      // Make a POST request to add the reservation
      const response = await axios.post(
        "http://localhost:3001/reservations",
        reservationPayLoad
      );
      console.log("Reservation added successfully:", response.data);
      alert("A confirmation email will be sent to you in few seconds");
      handleCloseModal();
    } catch (error) {
      console.error("Error adding reservation:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to create a new user
      const userResponse = await axios.post(
        "http://localhost:3001/users",
        user
      );
      // Set the created user's ID in the form data
      setFormData((prevFormData) => ({
        ...prevFormData,
        userID: userResponse.data._id,
      }));
      // Make a POST request to calculate the estimated price
      const priceResponse = await axios.post(
        "http://localhost:3001/reservations/price",
        formData
      );

      setFormData((prevFormData) => ({
        ...prevFormData,
        estimatedPrice: priceResponse.data.estimatedPrice, // update the estimatedPrice value of the formData
      }));

      // Prepare reservation details
      setReservation((prevReservation) => ({
        ...prevReservation,
        ...formData,
        user: userResponse.data, //store the user details
        van: vans.find((van) => van._id === formData.vanID), //store the picked van details,
      }));

      setResv(priceResponse.data.estimatedPrice);
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  const handleCloseModal = () => {
    // Reset form data after successful submission
    setFormData(initialFormData);
    // Reset user data after successful submission
    setUser(initialUserState);
    // Reset reservation details
    setReservation(null);
    // Close the modal
    setOpenModal(false);
    setResv(null);
  };
  useEffect(() => {
    // a function that executes twice if it has no dependency , else it will work whenever dependency is changed(exp resv)
    if (resv !== null) {
      setOpenModal(true);
    }
  }, [resv]);
  return (
    <Container maxWidth="md">
      <Typography variant="h4" id="reservation" gutterBottom>
        Reservation Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="outlined"
              name="CFname"
              value={user.CFname}
              onChange={handleChangeUser}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              name="CLname"
              value={user.CLname}
              onChange={handleChangeUser}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              name="email"
              value={user.email}
              onChange={handleChangeUser}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone"
              variant="outlined"
              name="phone"
              value={user.phone}
              onChange={handleChangeUser}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Pickup Location"
              variant="outlined"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChangeForm}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Dropoff Location"
              variant="outlined"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChangeForm}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Date"
              variant="outlined"
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChangeForm}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Cargo Description"
              variant="outlined"
              name="cargoDescription"
              value={formData.cargoDescription}
              onChange={handleChangeForm}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Loading Time (minutes)"
              variant="outlined"
              type="number"
              name="loadingTime"
              value={formData.loadingTime}
              onChange={handleChangeForm}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Reservation Period (hours)"
              variant="outlined"
              type="number"
              name="reservationPeriod"
              value={formData.reservationPeriod}
              onChange={handleChangeForm}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Distance (km)"
              variant="outlined"
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleChangeForm}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Select Warehouseman Count</InputLabel>
              <Select
                label="Select Warehouseman Count"
                name="warehousemanCount"
                value={formData.warehousemanCount}
                onChange={handleChangeForm}
              >
                {[0, 1, 2].map((count) => (
                  <MenuItem key={count} value={count}>
                    {count}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel>Select Van</InputLabel>
              <Select
                label="Select Van"
                name="vanID"
                value={formData.vanID}
                onChange={handleChangeForm}
              >
                {vans.map((van) => (
                  <MenuItem key={van._id} value={van._id}>
                    <Container>
                      <Typography>- Model: {van.model}</Typography>
                      <Typography>- Type: {van.type}</Typography>
                      <Typography>- Capacity: {van.capacity}</Typography>
                      <Typography>
                        - Dimensions:{" "}
                        {`${van.dimensions.length} x ${van.dimensions.width} x ${van.dimensions.height}`}
                      </Typography>
                      <Typography>- Basic Price: {van.basePrice}</Typography>
                    </Container>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* Add more fields as needed */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="info">
              Estimer
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* Confirmation Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              width: 400,
              backgroundColor: "#fff",
              padding: 20,
              maxHeight: "80vh",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="h5" gutterBottom>
                Reservation Details
              </Typography>
              {resv !== null ? (
                <List>
                  <ListItem>
                    <ListItemText
                      primary="User ID"
                      secondary={reservation.user._id}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Van ID"
                      secondary={reservation.vanID}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Warehouseman Count"
                      secondary={formData.warehousemanCount}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Pickup Location"
                      secondary={formData.pickupLocation}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Dropoff Location"
                      secondary={formData.dropoffLocation}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Date" secondary={formData.date} />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Client First Name"
                      secondary={reservation.user.CFname}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Client Last Name"
                      secondary={reservation.user.CLname}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Cargo Description"
                      secondary={formData.cargoDescription}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Loading Time (minutes)"
                      secondary={formData.loadingTime}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Reservation Period (hours)"
                      secondary={formData.reservationPeriod}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Distance (km)"
                      secondary={formData.distance}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Estimated Price"
                      secondary={formData.estimatedPrice}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Van Details"
                      secondary={
                        <Container>
                          <Typography>
                            - Model: {reservation.van.model}
                          </Typography>
                          <Typography>
                            - Type: {reservation.van.type}
                          </Typography>
                          <Typography>
                            - Capacity: {reservation.van.capacity}
                          </Typography>
                          <Typography>
                            - Dimensions:{" "}
                            {`${reservation.van.dimensions.length} x ${reservation.van.dimensions.width} x ${reservation.van.dimensions.height}`}
                          </Typography>
                          <Typography>
                            - Basic Price: {reservation.van.basePrice} €
                          </Typography>
                        </Container>
                      }
                    />
                  </ListItem>
                </List>
              ) : (
                <p>loading data</p>
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={handleCloseModal}
                variant="contained"
                color="error"
              >
                Close
              </Button>
              <Button
                onClick={confirmSubmission}
                variant="contained"
                color="primary"
              >
                confirm
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default ReservationForm;
