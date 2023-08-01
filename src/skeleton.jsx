import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeletonStyled = styled.div`
  width: 100%;
  .flagCard__wraper {
    margin-bottom: 30px;
    width: 100%;
    height: 400px;
    border-radius: 10px;
    box-shadow: 0px 10px 10px rgba(72, 84, 159, 0.25);
  }
  .description__container {
    padding: 20px;
    width: 100%;
  }
  .flag__img {
    margin-bottom: 20px;
    width: 100%;
    height: 200px;
  }
  .countryName {
    margin-bottom: 20px;
    width: 70%;
  }
`;

function SkeletonCard({ cards }) {
  return Array(cards)
    .fill(8)
    .map((item, i) => (
      <CardSkeletonStyled key={i}>
        <div className="flagCard__wraper">
          <div className="flag__img">
            <Skeleton height={200} />
          </div>
          <div className="description__container">
            <div className="countryName">
              <Skeleton height={30} />
            </div>
            <div className="destails">
              <Skeleton count={3} />
            </div>
          </div>
        </div>
      </CardSkeletonStyled>
    ));
}

export default SkeletonCard;
