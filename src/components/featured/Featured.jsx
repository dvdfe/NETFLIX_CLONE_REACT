import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Films" : "Séries"}</span>
          <select name="genre" id="genre">
            <option>Genres</option>
            <option value="adventure">Aventure</option>
            <option value="comedy">Comédie</option>
            <option value="Crime">Crime</option>
            <option value="fantasy">Fantastique</option>
            <option value="historical">Historique</option>
            <option value="horror">Horreur</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sience fiction</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drames</option>
            <option value="documentary">Documentaire</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://www.pixel4k.com/wp-content/uploads/2019/01/league-of-legends-fantasy-4k_1547938269.jpg.webp"
        alt=""
      />
      <div className="info">
        <img
          width="100%"
          src="https://i.ytimg.com/vi/YDjVH8cxrCQ/maxresdefault.jpg"
          alt=""
        />
        <span className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quaerat
          doloribus, iste iusto natus recusandae expedita incidunt voluptatum
          quasi nam quis hic error consectetur! Quibusdam nesciunt voluptatum
          totam sequi at?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrowIcon />
            <span>Lecture</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Plus d'infos</span>
          </button>
        </div>
      </div>
    </div>
  );
}
