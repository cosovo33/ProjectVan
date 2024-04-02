## Reservation API Documentation

This API provides endpoints to manage reservations for transportation services.

### Base URL

```
https://example.com/api/reservations
```

### Endpoints

#### 1. Get all reservations

- **URL:** `/`
- **Method:** `GET`
- **Description:** Retrieves all existing reservations.
- **Parameters:** None
- **Response:**
  - **Status:** 200 OK
  - **Content:** Array of reservation objects
- **Example:**
  ```http
  GET https://example.com/api/reservations/
  ```

#### 2. Add a new reservation

- **URL:** `/`
- **Method:** `POST`
- **Description:** Adds a new reservation.
- **Request Body:**
  - `userID` (string, required): ID of the user making the reservation.
  - `vanID` (string, required): ID of the van for the reservation.
  - `warehousemanCount` (number, required): Number of warehousemen.
  - `pickupLocation` (string, required): Pickup location.
  - `dropoffLocation` (string, required): Dropoff location.
  - `date` (string, required): Date and time of the reservation in ISO 8601 format.
  - `cargoDescription` (string, required): Description of the cargo.
  - `loadingTime` (number, required): Time necessary to load the cargo.
  - `reservationPeriod` (number, required): Time necessary to unload the cargo.
  - `distance` (number, required): Approximative distance of transportation.
  - `estimatedPrice` (number, required): Estimated price of the reservation.
- **Response:**
  - **Status:** 201 Created
  - **Content:** Newly created reservation object
- **Example:**
  ```http
  POST https://example.com/api/reservations/
  Content-Type: application/json

  {
    "userID": "user123",
    "vanID": "van456",
    "warehousemanCount": 2,
    "pickupLocation": "Location A",
    "dropoffLocation": "Location B",
    "date": "2024-04-01T08:00:00Z",
    "cargoDescription": "Fragile items",
    "loadingTime": 30,
    "reservationPeriod": 120,
    "distance": 10,
    "estimatedPrice": 150
  }
  ```

#### 3. Calculate the price for a reservation

- **URL:** `/price`
- **Method:** `POST`
- **Description:** Calculates the price for a reservation.
- **Request Body:**
  - `warehousemanCount` (number, required): Number of warehousemen.
  - `reservationPeriod` (number, required): Time necessary to unload the cargo.
  - `loadingTime` (number, required): Time necessary to load the cargo.
  - `distance` (number, required): Approximative distance of transportation.
  - `vanID` (string, required): ID of the van for the reservation.
- **Response:**
  - **Status:** 200 OK
  - **Content:** Object containing the estimated price
- **Example:**
  ```http
  POST https://example.com/api/reservations/price
  Content-Type: application/json

  {
    "warehousemanCount": 2,
    "reservationPeriod": 120,
    "loadingTime": 30,
    "distance": 10,
    "vanID": "van456"
  }
  ```

#### 4. Update a reservation by ID

- **URL:** `/:_id`
- **Method:** `PUT`
- **Description:** Updates an existing reservation by ID.
- **Parameters:**
  - `:_id` (string, required): ID of the reservation to be updated.
- **Request Body:** Updated reservation data (same as in the "Add a new reservation" endpoint).
- **Response:**
  - **Status:** 200 OK
  - **Content:** Updated reservation object
- **Example:**
  ```http
  PUT https://example.com/api/reservations/123
  Content-Type: application/json

  {
    "userID": "user456",
    "vanID": "van789",
    "warehousemanCount": 3,
    "pickupLocation": "Location C",
    "dropoffLocation": "Location D",
    "date": "2024-04-02T10:00:00Z",
    "cargoDescription": "Heavy items",
    "loadingTime": 45,
    "reservationPeriod": 180,
    "distance": 15,
    "estimatedPrice": 250
  }
  ```

#### 5. Get a reservation by ID

- **URL:** `/:_id`
- **Method:** `GET`
- **Description:** Retrieves a reservation by its ID.
- **Parameters:**
  - `:_id` (string, required): ID of the reservation to retrieve.
- **Response:**
  - **Status:** 200 OK
  - **Content:** Reservation object
- **Example:**
  ```http
  GET https://example.com/api/reservations/123
  ```

#### 6. Delete a reservation by ID

- **URL:** `/:_id`
- **Method:** `DELETE`
- **Description:** Deletes a reservation by its ID.
- **Parameters:**
  - `:_id` (string, required): ID of the reservation to delete.
- **Response:**
  - **Status:** 200 OK
  - **Content:** Object with a success message
- **Example:**
  ```http
  DELETE https://example.com/api/reservations/123
  ```

#### 7. Delete all reservations

- **URL:** `/`
- **Method:** `DELETE`
- **Description:** Deletes all existing reservations.
- **Parameters:** None
- **Response:**
  - **Status:** 200 OK
  - **Content:** Object with a success message
- **Example:**
  ```http
  DELETE https://example.com/api/reservations/
  ```

---

This concludes the documentation for the Reservation API.