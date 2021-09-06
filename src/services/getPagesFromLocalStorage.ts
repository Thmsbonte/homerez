// Get liked page saved in local storage
export const getLikedPageFromLocalStorage = () => {
  const stored = window.localStorage.getItem("likedPages");
  const likedPages: string[] = stored ? JSON.parse(stored) : [];
  return likedPages;
};
