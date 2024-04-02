## User API Documentation

This API provides endpoints to manage users.

### Base URL

```
https://example.com/api/users
```

### Endpoints

#### 1. Get all users

- **URL:** `/`
- **Method:** `GET`
- **Description:** Retrieves all existing users.
- **Parameters:** None
- **Response:**
  - **Status:** 200 OK
  - **Content:** Array of user objects
- **Example:**
  ```http
  GET https://example.com/api/users/
  ```

#### 2. Add a new user

- **URL:** `/`
- **Method:** `POST`
- **Description:** Adds a new user.
- **Request Body:**
  - `CFname` (string, required): First name of the user.
  - `CLname` (string, required): Last name of the user (must be unique).
  - `email` (string, required): Email address of the user.
  - `phone` (string, required): Phone number of the user.
- **Response:**
  - **Status:** 200 OK
  - **Content:** Newly created user object
- **Example:**
  ```http
  POST https://example.com/api/users/
  Content-Type: application/json

  {
    "CFname": "John",
    "CLname": "Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890"
  }
  ```

#### 3. Update a user by ID

- **URL:** `/:_id`
- **Method:** `PUT`
- **Description:** Updates an existing user by ID.
- **Parameters:**
  - `:_id` (string, required): ID of the user to be updated.
- **Request Body:** Updated user data (same as in the "Add a new user" endpoint).
- **Response:**
  - **Status:** 200 OK
  - **Content:** Updated user object
- **Example:**
  ```http
  PUT https://example.com/api/users/123
  Content-Type: application/json

  {
    "CFname": "Jane",
    "CLname": "Doe",
    "email": "jane.doe@example.com",
    "phone": "9876543210"
  }
  ```

#### 4. Get a user by ID

- **URL:** `/:_id`
- **Method:** `GET`
- **Description:** Retrieves a user by its ID.
- **Parameters:**
  - `:_id` (string, required): ID of the user to retrieve.
- **Response:**
  - **Status:** 200 OK
  - **Content:** User object
- **Example:**
  ```http
  GET https://example.com/api/users/123
  ```

#### 5. Delete a user by ID

- **URL:** `/:_id`
- **Method:** `DELETE`
- **Description:** Deletes a user by its ID.
- **Parameters:**
  - `:_id` (string, required): ID of the user to delete.
- **Response:**
  - **Status:** 200 OK
  - **Content:** Object with a success message
- **Example:**
  ```http
  DELETE https://example.com/api/users/123
  ```

#### 6. Delete all users

- **URL:** `/`
- **Method:** `DELETE`
- **Description:** Deletes all existing users.
- **Parameters:** None
- **Response:**
  - **Status:** 200 OK
  - **Content:** Object with a success message
- **Example:**
  ```http
  DELETE https://example.com/api/users/
  ```

---

This concludes the documentation for the User API.