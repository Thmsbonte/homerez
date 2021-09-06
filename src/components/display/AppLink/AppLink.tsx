import "./AppLink.scss";

// Libraries import
import { Link } from "react-router-dom";

// Constants import
import { grey } from "../../../constants/colors";

// Component interface
interface Props {
  title?: string;
  to?: string;
  color?: string;
}

export const AppLink = ({ title = "Link", to = "/", color = grey }: Props) => {
  return (
    <Link to={to}>
      <p className="app-link" style={{ color }}>
        {title}
      </p>
    </Link>
  );
};
