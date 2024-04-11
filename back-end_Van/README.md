# ProjectVan Backend

This project contains the backend codebase for ProjectVan.

## Installation

To set up the backend server, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/ProjectVan-backend.git
    ```

2. Navigate to the project directory:

    ```bash
    cd ProjectVan-backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:

PORT=3001 --> express server port (anything diffrent from 3000 , default react server)
URI='mongodb://localhost:27017/van' --> mongoDB database URI to connect to (you can set a password , i didn't use a password)
PASSWORD='**** **** **** ****' --> application password to connect to your SMTP mail
EMAIL='example@gmail.com' --> email for SMTP

    Replace `your_mongodb_uri` with the connection URI of your MongoDB database.

5. Start the server:

    ```bash
    cd PROJECTVAN/back-end_Van/api
    node index.js
    ```
6. The server should now be running on `http://localhost:3001`.

## Working with MongoDB

This project uses MongoDB as the database. Make sure you have MongoDB installed and running on your machine. If you haven't already installed MongoDB, you can download and install it from the [official MongoDB website](https://www.mongodb.com/try/download/community).

install mongoDB compass for user interface usage.

## Project Structure

The project structure is organized as follows:

```
ProjectVan
│
└───back-end_Van
    │
    │───api
    |   |───App.js
    │   |    - Main JavaScript file defining the entry point of the backend application.
    │   ├───.env
    │       - Configuration file for environment variables.
    ├───reservation
    │   │
    │   ├───api
    │   │   - Directory for reservation API documentation.
    │   │
    │   ├───reservationController.js
    │   │   - Controller file for managing reservation-related operations.
    │   │
    │   ├───reservationModel.js
    │   │   - Model file defining the schema for reservation data.
    │   │
    │   ├───reservationRoutes.js
    │   │   - Router file defining the routes for reservation-related endpoints.
    │   │
    │   └───reservationService.js
    │       - Service file containing business logic for reservation operations.
    │
    ├───user
    │   │
    │   ├───api
    │   │   - Directory for user API documentation.
    │   │
    │   ├───userController.js
    │   │   - Controller file for managing user-related operations.
    │   │
    │   ├───userModel.js
    │   │   - Model file defining the schema for user data.
    │   │
    │   ├───userRoutes.js
    │   │   - Router file defining the routes for user-related endpoints.
    │   │
    │   └───userService.js
    │       - Service containing business logic for user operations.
    │
    └───van
        │
        ├───api
        │   - Directory for van API documentation.
        │
        ├───vanController.js
        │   - Controller for managing van-related operations.
        │
        ├───vanModel.js
        │   - Model defining the schema for van data.
        │
        ├───vanRoutes.js
        │   - Router defining the routes for van-related endpoints.
        │
        └───vanService.js
            - Service containing business logic for van operations.
```


## License

This project is licensed under the [MIT License](LICENSE).