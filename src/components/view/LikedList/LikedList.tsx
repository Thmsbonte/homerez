import "./LikedList.scss";

// Component import
import { SubHeader } from "../../display/SubHeader/SubHeader";
import { LikedItem } from "../../display/LikedItem/LikedItem";

// Component interface
interface Props {
  likedPages: string[];
  search: string;
}

export const LikedList = ({ likedPages = [], search = "" }: Props) => {
  return (
    <div className="liked-list">
      <SubHeader title="Liked" />
      {likedPages
        .slice(0)
        .reverse()
        .map(
          (item) =>
            item.toLowerCase().includes(search.toLowerCase()) && (
              <LikedItem pageTitle={item} />
            )
        )}
    </div>
  );
};
