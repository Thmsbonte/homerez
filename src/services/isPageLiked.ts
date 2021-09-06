// Services import
import { getLikedPageFromLocalStorage } from "./getPagesFromLocalStorage";

// Check if a wikipedia page is already saved in user's local storage
export const isPageLiked = (pageTitle: string) => {
  const pageLiked = getLikedPageFromLocalStorage();
  if (pageLiked.indexOf(pageTitle) === -1) {
    return false;
  }
  return true;
};
