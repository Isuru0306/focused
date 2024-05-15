import { saveAs } from "file-saver";
import "./ImageListItem.css";

export function ImageListItem({ img }) {
  async function downloadImage(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    saveAs(blob, img.author + ".jpg");
  }

  return (
    <div className="card">
      <a href={img.url}>
        <img src={img.download_url} className="img" />;
      </a>
      <div className="card_banner">
        <img src={img.download_url} className="card_thumb" />
        <div className="card_text">
          <h3 className="card_title">{img.author}</h3>
          <div className="card_subtitle">
            Original size : {img.height}x{img.width}
          </div>
          <button
            className="card_button"
            onClick={() => downloadImage(img.download_url)}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
