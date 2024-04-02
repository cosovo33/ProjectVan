import React, { useState } from "react";
// import Logo from "../Assets/Logo.svg";
import Logo from "../Components/svg/VanExpressLogo";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpenMenu(false); // Close the menu after clicking a link
  };

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, id: "home" },
    { text: "About", icon: <InfoIcon />, id: "about" },
    { text: "Testimonials", icon: <CommentRoundedIcon />, id: "testimonials" },
    { text: "Contact", icon: <PhoneRoundedIcon />, id: "contact" },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        {/* <img src={Logo} alt="" /> */}
        <Logo/>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a key={item.text} href={`#${item.id}`} onClick={() => scrollToSection(item.id)}>
            {item.text}
          </a>
        ))}
        <button className="primary-button" onClick={() => scrollToSection("reservation")}>Reservation</button> {/* Wrap scrollToSection inside an arrow function */}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.id)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
