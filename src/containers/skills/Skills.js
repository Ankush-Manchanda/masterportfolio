import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills({ theme }) {
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do?
          </h1>
          <p
            className="subTitle skills-subtitle"
            style={{ color: theme.secondaryText }}
          >
            Here are some of the skills and technologies I've worked with:
          </p>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
