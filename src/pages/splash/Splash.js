import React, { useState, useEffect } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash({ theme }) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: theme.splashBg }}>
        <LoaderLogo id="logo" theme={theme} />
      </div>
    </div>
  );
}

const Splash = ({ theme }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRedirect(true), 5500);
    return () => clearTimeout(timer); // Clean up the timeout on unmount
  }, []);

  return redirect ? <Redirect to="/home" /> : <AnimatedSplash theme={theme} />;
};

export default Splash;
