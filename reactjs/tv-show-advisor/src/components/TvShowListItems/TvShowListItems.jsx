import { SMALL_IMAGE_BASE_URL } from "../../config.js";
import s from "./style.module.css";
const MAX_TITLE_CHAR = 20;
export default function TvShowListItems({ tvShow, onCardClick }) {
  const handleClick = (e) => {
    e.preventDefault();
    if (onCardClick) onCardClick(tvShow);
  };
  return (
    <div onClick={handleClick} className={s.container}>
      <img
        alt={tvShow.name}
        src={SMALL_IMAGE_BASE_URL + tvShow.backdrop_path}
        className={s.image}
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}
