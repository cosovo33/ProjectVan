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
  // const [users, setUsers] = useState([]);
  const [vans, setVans] = useState([]);

  // const lastUserId = useMemo(() => users.length + 1, [users]);

  useEffect(() => {
    const fetchUsersAndVans = async () => {
      try {
        // // Fetch users
        // const usersResponse = await axios.get("http://localhost:3001/users");
        // setUsers(usersResponse.data);

        // Fetch vans
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
