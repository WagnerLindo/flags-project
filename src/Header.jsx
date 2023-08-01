import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

const HeaderStyled = styled.div`
  background: white;
  width: 100%;
  height: 80px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  color: black;
  font-weight: 800;
  font-size: 10px;

  .buttonText {
    color: black;
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
    background: #e9e8e8;
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
  return (
    <HeaderStyled>
      <h1>{"Where in the world?"}</h1>
      <button className="buttonText">
        <img className="buttonIcon" src="/icons/dark-icon.svg" alt="" />
        <span>Dark mode</span>
      </button>
    </HeaderStyled>
  );
}

export default Header;
