import React from "react";
import "./ToggleSwitch.scss";
import { lightTheme } from "../../theme";
import styled from "styled-components";

export const ToggleDiv = styled.div`
  margin-top: 40px;
  margin-right: 5px;
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SunSvg = styled.svg`
  margin-right: 10px;
`;

export const MoonSvg = styled.svg`
  margin-left: 10px;
`;

export default class ToggleSwitch extends React.Component {
  render() {
    const { theme, onToggle } = this.props;
    const isOn = theme !== lightTheme;
    const back = theme.text;
    const butt = theme.body;

    return (
      <ToggleDiv>
        <SunSvg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={back}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </SunSvg>

        <input
          className="react-switch-checkbox"
          checked={isOn}
          onChange={onToggle}
          type="checkbox"
          id="theme-switch"
          aria-label="Toggle light and dark theme"
        />

        <label
          className="react-switch-label"
          htmlFor="theme-switch"
          style={{ background: back }}
        >
          <span className="react-switch-button" style={{ background: butt }} />
        </label>

        <MoonSvg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={back}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </MoonSvg>
      </ToggleDiv>
    );
  }
}
