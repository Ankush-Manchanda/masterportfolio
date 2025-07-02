import React from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ProjectLanguages = ({ logos = [] }) => {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons-languages">
        {logos.map((logo) => (
          <OverlayTrigger
            key={logo.name}
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${logo.name}`}>
                <strong>{logo.name}</strong>
              </Tooltip>
            }
          >
            <li
              className="software-skill-inline-languages"
              name={logo.skillName}
            >
              <span
                className="iconify"
                data-icon={logo.iconifyClass}
                data-inline="false"
                title={logo.name}
              ></span>
            </li>
          </OverlayTrigger>
        ))}
      </ul>
    </div>
  );
};

export default ProjectLanguages;
