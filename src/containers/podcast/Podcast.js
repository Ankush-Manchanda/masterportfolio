import React from "react";
import "./Podcast.css";
import { podcastSection } from "../../portfolio";

export default function Podcast() {
  return (
    <div className="main" id="podcasts">
      <div className="podcast-header">
        <h1 className="podcast-header-title">{podcastSection.title}</h1>
        <p className="subTitle podcast-header-subtitle">
          {podcastSection.subtitle}
        </p>
      </div>
      <div className="podcast-main-div">
        {podcastSection.podcast.map((podcastLink, index) => (
          <div key={index} className="podcast-iframe-container">
            <iframe
              title={`podcast-${index}`}
              className="podcast"
              src={podcastLink}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
