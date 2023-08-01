import styled from "styled-components";
import React, { useState } from "react";

const NavbarStyled = styled.div`
  background: var(--container-background);
  width: 100%;
  padding: 45px 30px;
  .search__container {
    display: flex;
    align-items: center;
    position: relative;
    margin-block-end: 75px;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  }
  .input__search {
    background: var(--cards-background);
    border-radius: 6px;
    width: 100%;
    padding: 18px 60px;
    font-size: 14px;
    font-weight: 300;
    border: none;
    transition: 0.4s;
    color: var(--header-text);
  }
  .input__search::placeholder {
    color: #888a8b;
  }
  .input__search:hover {
    transform: scale3d(1.01, 1.01, 1.01);
    transition: 0.4s;
  }
  .icon__search {
    position: absolute;
    z-index: 10;
    left: 30px;
  }
  .search__container:hover > .icon__search {
    transform: scale3d(1.2, 1.2, 1.2);
    transition: 0.4s;
  }
  @media screen and (min-width: 640px) {
    padding-inline: 60px;
  }
  @media screen and (min-width: 1280px) {
    padding-block-end: 0;
    padding-inline: 100px;
    display: flex;
    justify-content: space-between;
    .search__container {
      width: 40%;
      margin: unset;
    }
  }
  @media screen and (min-width: 1440px) {
    padding-inline: 140px;
  }
`;

const DropdownContainerStyled = styled.div`
  width: 60%;
  background: transparent;
  background: var(--cards-background);

  position: relative;
  @media screen and (min-width: 1280px) {
    width: 20%;
  }
`;
const DropdownButtonStyled = styled.button`
  width: 100%;
  background: var(--cards-background);
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  border-radius: 6px;
  padding: 18px 30px;
  font-family: "Nunito Sans", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: var(--cards-text);
  border: none;
  transition: 0.4s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;

  .icon__dropwdown {
    width: 15px;
    height: 15px;
  }
  &&:hover {
    transform: scale3d(1.01, 1.01, 1.01);
    transition: 0.4s;
  }
  &&:hover > .icon__dropwdown {
    transform: scale3d(1.3, 1.3, 1.3);
    transition: 0.4s;
  }
`;

const DropdownListStyled = styled.div`
  margin-block-start: 10px;
  width: 100%;
  background: var(--cards-background);
  border-radius: 6px;
  padding: 18px 30px;
  border: none;
  transition: 0.4s;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  display: flex;
  overflow: hidden;
  flex-direction: column;
  position: absolute;
  z-index: 10;

  .dropdown__option {
    color: var(--cards-text);
    padding: 5px 0px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 300;
    font-size: 14px;
    text-align: start;
    background: transparent;
    cursor: pointer;
    border: none;
    text-transform: capitalize;
  }
  .dropdown__option:hover {
    color: var(--text--hover);
    transform: scale3d(1.02, 1.02, 1.02);
    transition: 0.4s;
  }
`;
function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(this, args), delay);
  };
}

function SearchInput({ searchText, setSearchText }) {
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  const debouncedSetSearchText = debounce((value) => {
    setSearchText(value);
  }, 2000); // Ajusta el valor del retardo según tus necesidades

  const handleChange = (event) => {
    const { value } = event.target;
    setDebouncedSearchText(value);
    debouncedSetSearchText(value);
  };
  return (
    <>
      <input
        className="input__search"
        type="text"
        placeholder="Search for a country..."
        // value={searchText}
        value={debouncedSearchText}
        onKeyDown={handleSearch}
        onChange={handleChange}
        // onChange={(event) => {
        //   setSearchText(event.target.value);
        // }}
      />
    </>
  );
}

function DropdownButton({ selectedOption, setSelectedOption }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <DropdownContainerStyled>
        <DropdownButtonStyled
          onClick={() => {
            setShow(!show);
          }}
        >
          <span>
            {selectedOption == "" ? "Filter by Region" : selectedOption}{" "}
          </span>
          <img
            className="icon__dropwdown"
            src="/icons/arrowdown-icon.svg"
            alt=""
          />
        </DropdownButtonStyled>
        {show && (
          <DropdownListStyled>
            {["all", "Africa", "Americas", "Asia", "Europe", "Oceania"].map(
              (region) => (
                <button
                  key={region}
                  className="dropdown__option"
                  onClick={() => {
                    setSelectedOption(region);
                    setShow(false);
                  }}
                >
                  {region}
                </button>
              )
            )}
          </DropdownListStyled>
        )}
      </DropdownContainerStyled>
    </>
  );
}

function Navbar({
  searchText,
  setSearchText,
  selectedOption,
  setSelectedOption,
}) {
  return (
    <NavbarStyled>
      <form className="search__container">
        <img className="icon__search" src="/icons/search-icon.svg" alt="" />
        <SearchInput searchText={searchText} setSearchText={setSearchText} />
      </form>
      <DropdownButton
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </NavbarStyled>
  );
}

export default Navbar;
