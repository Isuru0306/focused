import { useState, useEffect } from "react";
import { TvShowApi } from "./api/tvShows";
import css from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";
import { TVShowList } from "./components/TvShowList/TvShowList";
import SearchBar from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState(null);
  const [recommendedTVShows, setRecommendedTVShows] = useState([]);

  const popularTvShows = async () => {
    try {
      const data = await TvShowApi.fetchPoplars();
      setCurrentTVShow(data.results[0]);
    } catch (error) {
      alert(error.message);
    }
  };

  const recommendationsTvShows = async (tvShowId) => {
    try {
      const data = await TvShowApi.fetchRecommendation(tvShowId);
      setRecommendedTVShows(data.results);
    } catch (error) {
      alert(error.message);
    }
  };

  const fetchByTitle = async (title) => {
    try {
      const data = await TvShowApi.fetchByTitle(title);
      if (data.results.length > 0) {
        setCurrentTVShow(data.results[0]);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    popularTvShows();
    return () => {
      popularTvShows();
    };
  }, []);

  useEffect(() => {
    if (currentTVShow) recommendationsTvShows(currentTVShow.id);
  }, [currentTVShow]);

  return (
    <div
      className={css.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={css.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              title="Watowatch"
              subtitle="Find a show you may like"
              image={logoImg}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={(value) => fetchByTitle(value)} />
          </div>
        </div>
      </div>
      <div className={css.tv_show_details}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={css.recommended_tv_shows}>
        {currentTVShow && (
          <TVShowList
            tvShowList={recommendedTVShows}
            onCardClick={(tvShow) => setCurrentTVShow(tvShow)}
          />
        )}
      </div>
    </div>
  );
}
