import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;

    // Safety check to avoid errors if data is undefined or empty
    if (!certifications?.certifications?.length) {
      return null;
    }

    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert, index) => (
            <CertificationCard key={index} certificate={cert} theme={theme} />
          ))}
        </div>
      </div>
    );
  }
}

export default Certifications;
