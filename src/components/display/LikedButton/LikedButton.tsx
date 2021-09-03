import { MouseEventHandler } from "react";
import "./LikedButton.scss";

// Constants import
import { red, lighRed, green, lightGreen } from "../../../constants/colors";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLiked?: boolean;
}

export const LikedButton = ({ onClick, isLiked = false }: Props) => {
  return (
    <button
      className="liked-button"
      onClick={onClick}
      style={{
        backgroundColor: isLiked ? lightGreen : lighRed,
        color: isLiked ? green : red,
      }}
    >
      <p>{isLiked ? "Liked !" : "Like <3"}</p>
    </button>
  );
};
