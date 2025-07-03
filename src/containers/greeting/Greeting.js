import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                Hi, I'm Ankush Manchanda
              </h1>
              <br />
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( ankush_codehub )
              </h2>
              <br />
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                A passionate Full Stack Developer and Computer Vision enthusiast
                🚀
                <br />
                with experience building Web and AI-powered applications.
              </p>
              <br />
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href="https://github.com/Ankush-Manchanda/masterportfolio"
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
              {/* You can uncomment the buttons below if you want them visible */}
              {/* <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" theme={theme} />
                <Button text="See my resume" newTab={true} href="<your_resume_link_here>" theme={theme} />
              </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
