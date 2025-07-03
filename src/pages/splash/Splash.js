import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Splash.css";

function Splash() {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => history.push("/home"), 6000);
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className="splash-container">
      <div className="hex-wrapper">
        <svg className="hex-svg" viewBox="0 0 200 200">
          {/* Outer Hexagon */}
          <polygon
            className="hex hex-outer"
            points="100,10 173,50 173,130 100,170 27,130 27,50"
          />
          {/* Inner Hexagon (scaled down slightly) */}
          <polygon
            className="hex hex-inner"
            points="100,10 173,50 173,130 100,170 27,130 27,50"
            transform="translate(15, 8)"
          />
        </svg>

        <div className="am-text">AM</div>
      </div>
      <div className="splash-name">Ankush Manchanda</div>
    </div>
  );
}

export default Splash;
