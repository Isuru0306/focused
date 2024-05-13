import TvShowListItems from "../TvShowListItems/TvShowListItems";
import s from "./style.module.css";

export function TVShowList({ tvShowList, onCardClick }) {
  const handleCardClick = (tvShow) => {
    if (onCardClick) onCardClick(tvShow);
  };

  return (
    <div>
      <div className={s.title}>You'll probably like :</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span className={s.tv_show_item} key={tvShow.id}>
              <TvShowListItems
                tvShow={tvShow}
                onCardClick={() => handleCardClick(tvShow)}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
