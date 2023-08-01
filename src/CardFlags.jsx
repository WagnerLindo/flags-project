import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFetchData } from "./Fetch";

const CardFlagsStyled = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(72, 84, 159, 0.25);
  color: black;
  .flagCard__wraper {
    position: relative;
    width: 100%;
    cursor: pointer;
  }
  .flagCard__wraper:hover {
    background-color: white;
    opacity: 0.9;
    transform: scale3d(1.1, 1.1, 1.1);
    transition: transform 1s ease, -webkit-transform 1s ease;
  }
  .countryName {
    font-weight: 800;
    font-size: 25px;
    margin-bottom: 20px;
  }
  .description__container {
    padding: 25px;
    font-size: 18px;
  }
  .info__country {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .description__key {
    font-weight: 600;
  }
  .description__value {
    font-weight: 300;
  }
  .flag__img {
    width: 100%;
    height: 200px;
  }
`;

function CountryCard({ img, countryName, population, region, capital }) {
  return (
    <CardFlagsStyled>
      <div className="flagCard__wraper">
        <img className="flag__img" src={img} alt="flag img" />
        <div className="description__container">
          <p className="countryName ">{countryName}</p>
          <div className="info__country">
            <p className="description__key">
              Population:{" "}
              <span className="description__value">{population}</span>
            </p>
            <p className="description__key">
              Region: <span className="description__value">{region}</span>
            </p>
            <p className="description__key">
              Capital: <span className="description__value">{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </CardFlagsStyled>
  );
}

const ContainerFlagsStyled = styled.div`
  background: #fafafa;
  padding: 20px 70px;
  .container__wraper {
    display: grid;
    justify-content: center;
    grid-template-columns: auto;
    gap: 50px;
  }
  /* .link__details::before {
    content: " ";
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    inline-size: 100%;
    block-size: 100%;
  } */

  @media screen and (min-width: 768px) {
    padding-inline: 60px;
  }
  @media screen and (min-width: 980px) {
    .container__wraper {
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
  }
  @media screen and (min-width: 1024px) {
    .container__wraper {
      padding-inline: 20px;
      gap: 50px;
    }
  }
  @media screen and (min-width: 1280px) {
    padding-inline: 100px;
    .container__wraper {
      padding: unset;
      margin-top: 50px;
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 1440px) {
    padding-inline: 140px;
    .container__wraper {
      grid-template-columns: repeat(4, 1fr);
      justify-content: center;
      gap: 30px;
    }
  }
  @media screen and (min-width: 1536px) {
    .container__wraper {
      gap: 60px;
    }
  }
`;
function ContainerFlags({ countries }) {
  //mediante la API se hace la busqueda por input y filtro//
  return (
    <>
      <ContainerFlagsStyled>
        <div className="container__wraper">
          {countries.map((country) => {
            return (
              <Link
                // className="link__details"
                to={`/details/${country.cca3.toLowerCase()}`}
                key={country.cca3}
              >
                <CountryCard
                  countryName={country.name.common}
                  img={country.flags.png}
                  population={country.population.toLocaleString()}
                  region={country.region}
                  capital={country.capital}
                />
              </Link>
            );
          })}
        </div>
      </ContainerFlagsStyled>
    </>
  );
}
export default ContainerFlags;
