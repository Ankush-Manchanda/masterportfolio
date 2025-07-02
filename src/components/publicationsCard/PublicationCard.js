import React from "react";
import "./PublicationCard.css";
import { Fade } from "react-reveal";

export default function PublicationCard({ pub, theme }) {
  function openPubinNewTab(url) {
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (win) win.focus();
  }

  return (
    <div
      className="publication-card-div"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div
          onClick={() => openPubinNewTab(pub.url)}
          role="button"
          tabIndex={0}
        >
          <div className="publication-name-div">
            <p className="publication-name" style={{ color: theme.text }}>
              {pub.name}
            </p>
          </div>
          <p className="publication-description" style={{ color: theme.text }}>
            {pub.description}
          </p>
          <div className="publication-details">
            <p
              className="publication-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Published on {pub?.createdAt?.split("T")[0] || "N/A"}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
