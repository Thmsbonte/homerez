import { MouseEventHandler } from "react";
import "./Button.scss";

// Constants import
import { grey } from "../../../constants/colors";

interface Props {
  title?: string;
  backgroundColor?: string;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  title = "Button",
  backgroundColor = grey,
  color = "white",
  onClick,
}: Props) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{ backgroundColor, color }}
    >
      <p>{title}</p>
    </button>
  );
};
