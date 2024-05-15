import { useState } from "react";
import { ImageList } from "./components/ImageList/ImageList";
import s from "./App.module.css";
import { useScrollPosition } from "./hooks/useScrollPosition";

export function App() {
  const [imageList, setImageList] = useState(DATA);
  const { isBottom } = useScrollPosition();
  console.log(isBottom);
  return (
    <div className={s.root}>
      <h1>Rand'images</h1>
      <h2>Download random open source images</h2>
      <ImageList imageList={imageList} />
    </div>
  );
}

const DATA = [
  {
    id: "5",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3334,
    url: "https://unsplash.com/photos/LF8gK8-HGSg",
    download_url: "https://picsum.photos/id/5/5000/3334",
  },
  {
    id: "6",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/tAKXap853rY",
    download_url: "https://picsum.photos/id/6/5000/3333",
  },
  {
    id: "7",
    author: "Alejandro Escamilla",
    width: 4728,
    height: 3168,
    url: "https://unsplash.com/photos/BbQLHCpVUqA",
    download_url: "https://picsum.photos/id/7/4728/3168",
  },
  {
    id: "8",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/xII7efH1G6o",
    download_url: "https://picsum.photos/id/8/5000/3333",
  },
  {
    id: "9",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3269,
    url: "https://unsplash.com/photos/ABDTiLqDhJA",
    download_url: "https://picsum.photos/id/9/5000/3269",
  },
];
