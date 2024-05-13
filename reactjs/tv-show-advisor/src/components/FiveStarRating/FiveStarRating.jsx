import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons";
function FiveStarRating({ rating }) {
  const starList = [];
  const starFillCount = Math.floor(rating);
  const starHalfCount = rating - parseInt(rating) > 0.5;
  const starEmptyCount = 5 - starFillCount - (starHalfCount ? 1 : 0);

  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={i} />);
  }

  if (starHalfCount) {
    starList.push(<StarHalf key={starFillCount} />);
  }

  for (let i = 0; i < starEmptyCount; i++) {
    starList.push(<StarEmpty key={starFillCount + i + 1} />);
  }

  return <div>{starList}</div>;
}

export default FiveStarRating;
