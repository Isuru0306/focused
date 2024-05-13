const BASE_URL = process.env.REACT_APP_BASE_URL;
const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";
const SMALL_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const OPTIONS = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export { BASE_URL, OPTIONS, BACKDROP_BASE_URL, SMALL_IMAGE_BASE_URL };
