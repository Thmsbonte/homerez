import { useEffect, useState } from "react";
import "./Liked.scss";

// Components import
import { MainTitle } from "../../display/MainTitle/MainTitle";
import { AppLink } from "../../display/AppLink/AppLink";
import { SearchInput } from "../../display/SearchInput/SearchInput";
import { LikedList } from "../../view/LikedList/LikedList";
import { Header } from "../../view/Header/Header";

// Services import
import { getLikedPageFromLocalStorage } from "../../../services/getPagesFromLocalStorage";

// Constants import
import { blue } from "../../../constants/colors";

export const Liked = () => {
  const [likedPages, setLikedPages] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");

  // At opening of the page, get pages liked
  useEffect(() => {
    const likedPages: string[] = getLikedPageFromLocalStorage();
    setLikedPages(() => {
      return likedPages;
    });
  }, []);

  /*Events handler */
  const handleSearchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(() => {
      return event.target.value;
    });
  };

  return (
    <div className="liked">
      <Header>
        <div className="liked-header">
          <MainTitle title="Wiki search" />{" "}
          <AppLink title="Back" color={blue} to="/" />
        </div>
      </Header>
      <SearchInput
        title="Search in liked"
        placeholder={'Try "Paris" or "Marseille"'}
        onChange={handleSearchOnChange}
        value={search}
      />
      <LikedList likedPages={likedPages} search={search} />
    </div>
  );
};
