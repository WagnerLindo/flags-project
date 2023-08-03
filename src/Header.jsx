import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";

const HeaderStyled = styled.div`
  background: var(--header-background);
  width: 100%;
  height: 80px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  color: var(--header-text);
  font-weight: 800;
  font-size: 10px;

  .buttonText {
    color: var(--header-text);
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 13px;
    border: none;
    padding: 8px 15px;
    background: transparent;
    cursor: pointer;
  }
  .buttonText:hover {
    opacity: 0.9;
    border-radius: 10px;
  }
  .buttonIcon {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 640px) {
    padding-inline: 60px;
  }
  @media screen and (min-width: 1280px) {
    padding-inline: 100px;
  }
  @media screen and (min-width: 1440px) {
    padding-inline: 140px;
  }
`;

function Header() {
  const [theme, setTheme] = useState("light");

  const nextTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  return (
    <HeaderStyled>
      <h1>{"Where in the world?"}</h1>
      <button
        className="buttonText"
        onClick={() => {
          setTheme(nextTheme);
        }}
      >
        <img
          className="buttonIcon"
          src={
            theme === "light" ? "/icons/dark-icon.svg" : "/icons/light-icon.svg"
          }
          alt=""
        />

        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </button>
    </HeaderStyled>
  );
}

export default Header;
