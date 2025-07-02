import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer({ theme }) {
  return (
    <footer className="footer-div">
      <Fade bottom duration={1000} distance="10px">
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by {greeting.title}
        </p>
        {/* <ToggleSwitch theme={theme} onToggle={props.onToggle} /> */}
      </Fade>
    </footer>
  );
}
