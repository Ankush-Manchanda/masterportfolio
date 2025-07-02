import React, { Component } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import { motion } from "framer-motion"; // ✅ using framer-motion now

const onMouseEnter = (event, color) => {
  event.target.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  event.target.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "/home";

    return (
      <>
        <SeoHeader />
        <motion.header
          className="header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <NavLink to={link} className="logo">
            <span style={{ color: theme.text }}> &lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.title}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon"
            htmlFor="menu-btn"
            role="button"
            tabIndex="0"
          >
            <span className="navicon"></span>
          </label>

          <ul className="menu" style={{ backgroundColor: theme.body }}>
            {[
              { to: "/home", label: "Home" },
              { to: "/education", label: "Education" },
              { to: "/experience", label: "Experience" },
              { to: "/projects", label: "Projects" },
              { to: "/contact", label: "Contact Me" },
            ].map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  exact
                  to={to}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                  onMouseOut={(e) => onMouseOut(e)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.header>
      </>
    );
  }
}

export default Header;
