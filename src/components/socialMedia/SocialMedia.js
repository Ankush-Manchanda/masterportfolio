import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
    transition: background-color 0.3s ease-in;
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
  }
`;

export default function SocialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, index) => (
        <a
          key={index}
          href={media.link}
          className="icon-button"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={media.name}
        >
          <IconWrapper {...media} {...props}>
            <i className={`fab ${media.fontAwesomeIcon}`}></i>
          </IconWrapper>
        </a>
      ))}
    </div>
  );
}
