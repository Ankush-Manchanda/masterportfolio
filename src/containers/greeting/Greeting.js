import React from "react";
import { greeting } from "../../portfolio";
import "./Greeting.css";

const Greeting = ({ theme }) => {
  return (
    <div className="greeting-main">
      <h1
        className="greeting-text"
        style={{
          color: theme.text,
          animation: "slideFadeIn 1s ease-out forwards",
          opacity: 0,
          transform: "translateY(-40px)",
        }}
      >
        {greeting.title}
      </h1>

      <p
        className="greeting-subtitle fade-slide delay"
        style={{ color: theme.secondaryText }}
      >
        {greeting.subTitle}
      </p>
    </div>
  );
};

export default Greeting;
