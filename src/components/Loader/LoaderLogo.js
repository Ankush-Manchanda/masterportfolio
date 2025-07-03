import React from "react";
import "./LoaderLogo.css";

function LoaderLogo({ theme }) {
  return (
    <div className="loader-logo-container">
      <h1 className="initials" style={{ color: theme.text }}>
        A<span className="fade">M</span>
      </h1>
      <h2 className="name-tag" style={{ color: theme.accentBright }}>
        &lt;Ankush Manchanda/&gt;
      </h2>
    </div>
  );
}

export default LoaderLogo;
