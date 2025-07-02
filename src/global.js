import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; /* changed from center to allow scrolling */
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;
