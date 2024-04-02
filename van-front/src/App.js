import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchUsersAndVans = async () => {
      try {
        // async axios call for the GET all vans route 
        const vansResponse = await axios.get("http://localhost:3001/vans");
        setVans(vansResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsersAndVans();
  }, []);

  return (
<div className="App">
  {vans.length > 0 ? (
    <Home  vans={vans} />
  ) : (
    <p>Loading...</p>
  )}
  <About />
  <Work />
  <Testimonial />
  <Contact />
  <Footer />
</div>  );
}

export default App;
