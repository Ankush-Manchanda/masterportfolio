import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";

export default function Contact() {
  if (!contactInfo) return null;

  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

          <div className="contact-text-div">
            {contactInfo.number && (
              <>
                <a
                  className="contact-detail"
                  href={`tel:${contactInfo.number}`}
                >
                  {contactInfo.number}
                </a>
                <br />
                <br />
              </>
            )}

            {contactInfo.email_address && (
              <>
                <a
                  className="contact-detail-email"
                  href={`mailto:${contactInfo.email_address}`}
                >
                  {contactInfo.email_address}
                </a>
                <br />
                <br />
              </>
            )}

            <SocialMedia />
          </div>
        </div>

        <div className="contact-image-div">
          <img
            alt="Contact illustration"
            src={require("../../assets/images/contactMail.png")}
          />
        </div>
      </div>
    </div>
  );
}
