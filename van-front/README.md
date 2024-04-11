# ProjectVan Landing Page

This project consists of a landing page for ProjectVan. It contains various assets and components necessary for building a landing page.
## Installation
Run `npm install`inside the `van-front` folder.
run `npm start` the react app should run on `localhost:3000`.
## Project Structure

The project structure is organized as follows:

```
PROJECTVAN
│
└───van-front
        │
        └───src
            │
            ├───App.css
            │   - Stylesheet file for the main application
            │
            ├───App.js
            │   - Main JavaScript file defining the root component of the application
            │
            ├───Assets
            │   │
            │   ├───about-background.png
            │   ├───choose-image.png
            │   ├───home-banner-background.png
            │   ├───home-banner-image.png
            │   ├───john-doe-image.png
            │   ├───Logo.svg
            │   ├───map.webp
            │   ├───map1.webp
            │   └───supervanWallpaper.jpg
            │       - Various assets used within the application
            │
            ├───Components   			Directory containing different components of the application
            │   │
            │   ├───About.js			JavaScript file defining the About component
            │   ├───Contact.js			JavaScript file defining the Contact component
            │   ├───Footer.js			JavaScript file defining the Footer component
            │   ├───Home.js			JavaScript file defining the Home component ( parent of navbar and reservation)
            │   ├───Navbar.js			JavaScript file defining the Navbar component	
            │   ├───Reservaton.jsx		JSX file defining the Reservation component (the form defenition in here)
            │   ├───Testimonial.js		JavaScript file defining the Testimonial component
            │   └───Work.js  			JavaScript file defining the Work component
            │       - JavaScript files defining different components of the application
            │
            └───Components
                └───svg   				Directory containing SVG components used within the application
                    │
                    ├───Agenda.jsx
                    ├───EmailEnvelope.jsx
                    ├───SvgComponent.jsx
                    └───VanExpressLogo.jsx
                        - SVG components used within the application.
```



## License

This project is licensed under the [MIT License](LICENSE).