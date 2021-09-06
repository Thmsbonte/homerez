import "./LikedItem.scss";

// Component interface
interface Props {
  pageTitle: string;
}

export const LikedItem = ({ pageTitle = "Unknown" }: Props) => {
  return <p className="liked-item">{`- ${pageTitle}`}</p>;
};
