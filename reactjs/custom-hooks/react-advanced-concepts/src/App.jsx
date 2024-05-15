import { useEffect, useState } from "react";
import { ImageList } from "./components/ImageList/ImageList";
import s from "./App.module.css";
import { useScrollPosition } from "./hooks/useScrollPosition";
import axios from "axios";

export function App() {
  const [imageList, setImageList] = useState([]);
  const { isBottom } = useScrollPosition();
  const [pageToFetch, setPageToFetch] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isBottom) {
      setPageToFetch(pageToFetch + 1);
    }
  }, [isBottom]);

  useEffect(() => {
    fetchImagesByPageNumber(pageToFetch);
  }, [pageToFetch]);

  const fetchImagesByPageNumber = async (page) => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${page}$limit=2`
    );
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  };

  return (
    <div className={s.root}>
      <h1>Rand'images</h1>
      <h2>Download random open source images</h2>
      <ImageList imageList={imageList} />
      {isLoading && <div className="spinner-border" role="status" />}
    </div>
  );
}
