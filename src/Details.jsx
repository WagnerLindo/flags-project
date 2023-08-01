import styled from "styled-components";
import "./App.css";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const DetailsContainer = styled.div`
  background: var(--container-background);
  padding: 30px 40px;
  width: 100%;
  color: var(--header-text);
  .details__wraper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .flag__img {
    aspect-ratio: 4/3;
    margin-bottom: 40px;
  }
  .countryName {
    font-weight: 800;
    font-size: 32px;
    margin-bottom: 20px;
  }
  .info__country {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 40px;
  }
  .description__key {
    font-weight: 600;
    font-size: 18px;
  }
  .description__value {
    font-weight: 300;
    font-size: 18px;
  }
  .bordersContainer {
    font-weight: 600;
    font-size: 24px;
  }
  .bordersCountries {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .toOtherCountry {
    background: var(--cards-background);
    border-radius: 6px;
    border: 1px solid transparent;
    color: var(--text--hover);
    font-weight: 300;
    font-size: 18px;
    padding: 10px 30px;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  }
  .toOtherCountry:hover {
    transform: scale3d(1.07, 1.07, 1.07);
    transition: 0.4s;
    border: 1px solid var(--text--hover);
  }
  .toBack {
    display: flex;
    margin-bottom: 40px;
    max-width: 180px;
  }
  .btnBack {
    background: var(--cards-background);
    display: flex;
    justify-content: center;
    border: 1px solid transparent;
    gap: 30px;
    border-radius: 6px;
    width: 100%;
    color: var(--text-back);
    font-weight: 600;
    font-size: 20px;
    padding: 10px;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  }
  .btnBack:hover {
    transform: scale3d(1.08, 1.03, 1.05);
    border: 1px solid var(--text-back);
    transition: 0.4s;
  }
  @media screen and (min-width: 640px) {
    padding-inline: 60px;
    .flag__img {
      aspect-ratio: 3/2;
    }
  }
  @media screen and (min-width: 768px) {
    padding-inline: 140px;
  }
  @media screen and (min-width: 980px) {
    padding-inline: 240px;
  }
  @media screen and (min-width: 1024px) {
    padding-inline: 60px;
    height: 100vh;
    .details__wraper {
      flex-direction: row;
      justify-content: space-between;
      gap: 50px;
    }
    .flag__img {
      margin-bottom: unset;
      width: 50%;
      height: 100%;
    }
    .info__container {
      display: flex;
      justify-content: space-between;
      gap: 40px;
    }
    .info__country {
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 1280px) {
    padding-inline: 100px;
  }
  @media screen and (min-width: 1440px) {
    padding-inline: 140px;
    .details__wraper {
      gap: 60px;
    }
    .infoCountry__wraper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;
    }
  }
`;

function DetailsOfCountry({
  img,
  countryName,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  tlDomain,
  currencies,
  languagues,
  borders,
}) {
  return (
    <>
      <DetailsContainer>
        <Link className="toBack" href="" to={`/`}>
          <div className="btnBack">
            <img src="/icons/backArrow-icon.svg" alt="" /> Back
          </div>
        </Link>
        <div className="details__wraper">
          <img className="flag__img" src={img} alt="flag img" />
          <div className="infoCountry__wraper">
            <p className="countryName">{countryName}</p>
            <div className="info__container">
              <div className="info__country">
                <p className="description__key">
                  Native Name:{" "}
                  <span className="description__value">{nativeName}</span>
                </p>
                <p className="description__key">
                  Population:{" "}
                  <span className="description__value">{population}</span>
                </p>
                <p className="description__key">
                  Region: <span className="description__value">{region}</span>
                </p>
                <p className="description__key">
                  Sub-Region:{" "}
                  <span className="description__value">{subRegion}</span>
                </p>
                <p className="description__key">
                  Capital: <span className="description__value">{capital}</span>
                </p>
              </div>
              <div className="info__country">
                <p className="description__key">
                  Top Level Domain:{" "}
                  <span className="description__value">{tlDomain}</span>
                </p>
                <p className="description__key">
                  Currencies:{" "}
                  <span className="description__value">{currencies}</span>
                </p>
                <p className="description__key">
                  Languagues:{" "}
                  <span className="description__value">{languagues}</span>
                </p>
              </div>
            </div>

            {borders?.length > 0 && (
              <div className="bordersContainer">
                <p>Border Countries</p>
                <div className="bordersCountries">
                  {borders?.map((border) => {
                    return (
                      <Link
                        key={border}
                        className="toOtherCountry"
                        to={`/details/${border}`}
                      >
                        {border}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </DetailsContainer>
    </>
  );
}

function Details() {
  const { countryCode } = useParams();
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState({});
  useEffect(() => {
    setStatus("pending");
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((response) =>
        response.json().then((data) => {
          setStatus("success");
          setData(data[0]);
        })
      )
      .catch((error) => {
        setStatus("rejected");
      });
  }, [countryCode]);
  return (
    <>
      {status == "success" && (
        <div className="container__wraper">
          <DetailsOfCountry
            key={data.name.official}
            img={data.flags.svg}
            countryName={data.name.common}
            nativeName={Object.values(data.name.nativeName)[0].common}
            population={data.population.toLocaleString()}
            region={data.region}
            subRegion={data.subregion}
            capital={data.capital}
            tlDomain={data.tld}
            borders={data.borders}
            currencies={Object.values(data.currencies)[0].name}
            languagues={Object.values(data.languages).join(", ")}
          />
        </div>
      )}
    </>
  );
}

export default Details;
