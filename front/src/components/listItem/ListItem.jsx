import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/watch?v=cKOegEuCcfw&t=2s";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://wallpaperaccess.com/full/642696.png" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOffAltIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>43 mins</span>
              <span className="limit">+18</span>
              <span>2022</span>
            </div>
            <div className="description">
              Recommandé à 98% 
            </div>
            <div className="genre">Nostalgique  •  Effrayant  •  Science fiction</div>
          </div>
        </>
      )}
    </div>
  );
}
