Below is the documentation for the `ReservationForm` component, including explanations of its states, functions, and props used inside the component:

---

## ReservationForm Component Documentation

This React component represents a form for making reservations. It allows users to input their details, select a van, and specify reservation details such as pickup location, dropoff location, date, cargo description, and more.

### Props

- **vans**: An array of objects representing available vans for reservation. Each van object contains details such as ID, model, type, capacity, dimensions, and base price.

### States

- **user**: Object state containing user details such as first name, last name, email, and phone number.
- **formData**: Object state containing reservation details such as user ID, van ID, warehouseman count, pickup location, dropoff location, date, cargo description, loading time, reservation period, distance, and estimated price.
- **openModal**: Boolean state to control the visibility of the confirmation modal.
- **reservation**: Object state containing details of the reservation after submission.
- **resv**: State to track the reservation's estimated price.

### Functions

- **handleChangeForm(e: Event)**: Function to handle changes in the reservation form inputs. It updates the `formData` state accordingly.
- **handleChangeUser(e: Event)**: Function to handle changes in the user details inputs. It updates the `user` state accordingly.
- **handleSubmit(e: Event)**: Function to handle form submission. It makes POST requests to create a new user and calculate the estimated price for the reservation. It then prepares reservation details and updates the `reservation` state.
- **confirmSubmission(e: Event)**: Function to handle confirmation of reservation submission. It makes a POST request to add the reservation to the database and displays a confirmation message.
- **handleCloseModal()**: Function to handle closing of the confirmation modal. It resets form and state data and closes the modal.
- **useEffect**: Hook to open the confirmation modal when the estimated price is calculated (`resv` state changes).

### Component Structure

- **ReservationForm**
  - **States:**
    - `user`: Object state for user details.
    - `formData`: Object state for reservation details.
    - `openModal`: Boolean state for modal visibility.
    - `reservation`: Object state for reservation details after submission.
    - `resv`: State to track the reservation's estimated price.
  - **Functions:**

1. **handleChangeForm(e: Event)**:
   - Updates the `formData` state with the new value of the form field that triggered the event.

2. **handleChangeUser(e: Event)**:
   - Updates the `user` state with the new value of the user detail field that triggered the event.

3. **handleSubmit(e: Event)**:
   - Submits the reservation form by making POST requests to create a new user and calculate the estimated price for the reservation.
   - Updates the reservation details based on the responses received.
   - Triggers the opening of the confirmation modal.

4. **confirmSubmission(e: Event)**:
   - Confirms the submission of the reservation by making a POST request to add the reservation to the database.
   - Displays a confirmation message upon successful submission.

5. **handleCloseModal()**:
   - Resets form and state data to their initial values.
   - Closes the confirmation modal.

6. **useEffect**:
   - Opens the confirmation modal when the estimated price is calculated (`resv` state changes).

These functions collectively handle the user interaction with the reservation form, including form submission, API calls, and displaying confirmation messages.

  - **Render:**
    - Form fields for user details and reservation details.
    - Confirmation modal displaying reservation details and options to confirm or close.
    - Material-UI components such as `TextField`, `Button`, `Container`, `Grid`, `Typography`, `Select`, `MenuItem`, `FormControl`, `InputLabel`, `Modal`, `ListItemText`, `ListItem`, `List`.

### Dependencies

- `React`: React library for building user interfaces.
- `TextField`, `Button`, `Container`, `Grid`, `Typography`, `Select`, `MenuItem`, `FormControl`, `InputLabel`, `Modal`, `ListItemText`, `ListItem`, `List` (from Material-UI): Components for creating form fields, modal, and layout.

---

#### Endpoints Used:

1. **POST `/users`**:
   - Purpose: Create a new user with provided details.
   - Request Body: User details including first name, last name, email, and phone.
   - Response: Newly created user object with an ID.
   
2. **POST `/reservations/price`**:
   - Purpose: Calculate the estimated price for the reservation based on provided details.
   - Request Body: Reservation details including user ID, van ID, pickup location, dropoff location, date, cargo description, loading time, reservation period, and distance.
   - Response: Object containing the estimated price for the reservation.

3. **POST `/reservations`**:
   - Purpose: Add a new reservation to the database with provided details.
   - Request Body: Reservation details including user ID, van ID, warehouseman count, pickup location, dropoff location, date, cargo description, loading time, reservation period, distance, estimated price, client first name, and client last name.
   - Response: Newly created reservation object.

#### Illustration of Functions

1. **handleChangeForm(e: Event)**:
   - Updates the `formData` state with the new value of the form field that triggered the event.

2. **handleChangeUser(e: Event)**:
   - Updates the `user` state with the new value of the user detail field that triggered the event.

3. **handleSubmit(e: Event)**:
   - Submits the reservation form by making POST requests to create a new user and calculate the estimated price for the reservation.
   - Updates the reservation details based on the responses received.
   - Triggers the opening of the confirmation modal.

4. **confirmSubmission(e: Event)**:
   - Confirms the submission of the reservation by making a POST request to add the reservation to the database.
   - Displays a confirmation message upon successful submission.

5. **handleCloseModal()**:
   - Resets form and state data to their initial values.
   - Closes the confirmation modal.

6. **useEffect**:
   - Opens the confirmation modal when the estimated price is calculated (`resv` state changes).

These functions collectively handle the user interaction with the reservation form, including form submission, API calls, and displaying confirmation messages.