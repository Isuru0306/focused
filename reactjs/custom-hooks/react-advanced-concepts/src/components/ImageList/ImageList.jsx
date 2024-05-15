import { ImageListItem } from "../ImageListItem/ImageListItem";
import "./ImageList.css";
export function ImageList({ imageList }) {
  return imageList.map((img, index) => {
    return (
      <div key={`${img.id}_${index}`} className="card_item">
        <ImageListItem img={img} />
      </div>
    );
  });
}
