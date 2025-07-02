import React, { useEffect } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  useEffect(() => {
    const scrollFunction = () => {
      const button = document.getElementById("topButton");
      if (!button) return;
      button.style.visibility = window.pageYOffset > 30 ? "visible" : "hidden";
    };

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const GoUpEvent = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onMouseEnter = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");
    if (topButton && arrow) {
      topButton.style.color = color;
      topButton.style.backgroundColor = bgColor;
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  const onMouseLeave = (color, bgColor) => {
    const topButton = document.getElementById("topButton");
    const arrow = document.getElementById("arrow");
    if (topButton && arrow) {
      topButton.style.color = color;
      topButton.style.backgroundColor = bgColor;
      arrow.style.color = color;
      arrow.style.backgroundColor = bgColor;
    }
  };

  return (
    <div
      id="topButton"
      title="Go up"
      onClick={GoUpEvent}
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
      style={{
        visibility: "hidden",
        color: theme.body,
        backgroundColor: theme.text,
        border: `1px solid ${theme.text}`,
      }}
    >
      <i className="fas fa-arrow-up" id="arrow" aria-hidden="true" />
    </div>
  );
}
