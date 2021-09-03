import { getLikedPageFromLocalStorage } from "./getPagesFromLocalStorage";

export const isPageLiked = (pageTitle: string) => {
  const pageLiked = getLikedPageFromLocalStorage();
  if (pageLiked.indexOf(pageTitle) === -1) {
    return false;
  }
  return true;
};
