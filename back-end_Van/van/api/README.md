## Van API Documentation

This API provides endpoints to manage vans.

### Base URL

```
https://example.com/api/vans
```

### Endpoints

#### 1. Get all vans

- **URL:** `/`
- **Method:** `GET`
- **Description:** Retrieves all existing vans.
- **Parameters:** None
- **Response:**
  - **Status:** 200 OK
  - **Content:** Array of van objects
- **Example:**
  ```http
  GET https://example.com/api/vans/
  ```

#### 2. Add a new van

- **URL:** `/`
- **Method:** `POST`
- **Description:** Adds a new van.
- **Request Body:**
  - `identifier` (string, required): Identifier of the van.
  - `type` (string, enum: ['small', 'classic', 'large', 'jumbo'], default: 'small', required): Type of the van.
  - `capacity` (number, enum: [300, 500, 700, 1000], default: 300, required): Capacity of the van.
  - `model` (string, required): Model of the van.
  - `dimensions` (object):
    - `length` (number, enum: [2.00, 2.50, 3.00, 4.00], default: 2.00): Length of the van.
    - `width` (number, enum: [1.25, 1.70, 2.00], default: 1.25): Width of the van.
    - `height` (number, enum: [1.55, 1.65, 1.70, 2.10], default: 1.55): Height of the van.
  - `location` (string): Location of the van.
  - `basePrice` (number, enum: [30, 60, 80, 100], default: 30): Base price of the van.
  - `warehouseman` (number, enum: [0, 1, 2], default: 0): Number of warehousemen for the van.
- **Response:**
  - **Status:** 200 OK
  - **Content:** Newly created van object
- **Example:**
  ```http
  POST https://example.com/api/vans/
  Content-Type: application/json

  {
    "identifier": "VAN001",
    "type": "classic",
    "capacity": 500,
    "model": "Ford Transit",
    "dimensions": {
      "length": 3.00,
      "width": 1.70,
      "height": 1.70
    },
    "location": "New York",
    "basePrice": 60,
    "warehouseman": 1
  }
  ```

#### 3. Update a van by ID

- **URL:** `/:_id`
- **Method:** `PUT`
- **Description:** Updates an existing van by ID.
- **Parameters:**
  - `:_id` (string, required): ID of the van to be updated.
- **Request Body:** Updated van data (same as in the "Add a new van" endpoint).
- **Response:**
  - **Status:** 200 OK
  - **Content:** Updated van object
- **Example:**
  ```http
  PUT https://example.com/api/vans/123
  Content-Type: application/json

  {
    "identifier": "VAN001",
    "type": "classic",
    "capacity": 500,
    "model": "Ford Transit XL",
    "dimensions": {
      "length": 3.20,
      "width": 1.80,
      "height": 1.80
    },
    "location": "Los Angeles",
    "basePrice": 65,
    "warehouseman": 1
  }
  ```

#### 4. Get a van by ID

- **URL:** `/:_id`
- **Method:** `GET`
- **Description:** Retrieves a van by its ID.
- **Parameters:**
  - `:_id` (string, required): ID of the van to retrieve.
- **Response:**
  - **Status:** 200 OK
  - **Content:** Van object
- **Example:**
  ```http
  GET https://example.com/api/vans/123
  ```

#### 5. Delete a van by ID

- **URL:** `/:_id`
- **Method:** `DELETE`
- **Description:** Deletes a van by its ID.
- **Parameters:**
  - `:_id` (string, required): ID of the van to delete.
- **Response:**
  - **Status:** 200 OK
  - **Content:** Object with a success message
- **Example:**
  ```http
  DELETE https://example.com/api/vans/123
  ```

#### 6. Delete all vans

- **URL:** `/`
- **Method:** `DELETE`
- **Description:** Deletes all existing vans.
- **Parameters:** None
- **Response:**
  - **Status:** 200 OK
  - **Content:** Object with a success message
- **Example:**
  ```http
  DELETE https://example.com/api/vans/
  ```

---

This concludes the documentation for the Van API.