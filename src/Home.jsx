import { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";
import ContainerFlags from "./CardFlags";
import { useFetchData } from "./Fetch";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "./skeleton";
import styled from "styled-components";

const CardSkeletonStyled = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 70px;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto;

  @media screen and (min-width: 640px) {
    padding-inline: 120px;
  }
  @media screen and (min-width: 768px) {
    padding-inline: 170px;
  }
  @media screen and (min-width: 980px) {
    padding-inline: 60px;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  @media screen and (min-width: 1024px) {
    padding-inline: 90px;
    gap: 50px;
  }
  @media screen and (min-width: 1280px) {
    padding-inline: 100px;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    justify-items: center;
  }
  @media screen and (min-width: 1440px) {
    padding-inline: 140px;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    gap: 30px;
  }
  @media screen and (min-width: 1536px) {
    gap: 80px;
  }
`;
const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  color: #dc3113;
  margin-top: 100px;
  .imgProblem {
    width: 100px;
    height: 100px;
  }
  .upss {
    font-size: 30px;
    font-weight: 800;
  }
  .problem {
    font-size: 20px;
    font-weight: 600;
  }
`;

function Home() {
  const [selectedOption, setSelectedOption] = useState("all"); // el estado debe comenzar con todos los paises//
  const [searchText, setSearchText] = useState("");
  const { isLoading, isSuccess, isError, countries } = useFetchData(
    selectedOption,
    searchText
  );

  //de forma manual seria...///
  // const flagsSearch = countries.filter((flag) => {
  //   const commonWord = (text) => {
  //     return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  //   };
  //   const AllText = commonWord(flag.name.common.toLowerCase());
  //   const searchTextLC = commonWord(searchText.toLowerCase());
  //   return AllText.includes(searchTextLC);
  // });

  // //dropdown

  // const flagsByContinent = flag.filter((bandea) => {
  //   return bandea.region === selectedOption;
  // });///

  return (
    <>
      {isLoading && (
        <CardSkeletonStyled>
          <SkeletonCard cards={8} />
        </CardSkeletonStyled>
      )}
      {isSuccess && (
        <>
          <Navbar
            searchText={searchText}
            setSearchText={setSearchText}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
          <ContainerFlags countries={countries}></ContainerFlags>
        </>
      )}
      {isError && (
        <ContainerError className="errorContainer">
          <img
            className="imgProblem"
            src="../public/icons/error-icon.svg"
            alt=""
          />{" "}
          <span className="upss">UPSS!!</span>
          <span className="problem"> THERE WAS A PROBLEM</span>
          <span>Try again later.</span>
        </ContainerError>
      )}
    </>
  );
}

export default Home;
