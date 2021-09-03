export const savePageInLocalStorage = (pageTitle: string) => {
  // Retrieve pages already saved
  const stored = window.localStorage.getItem("likedPages");
  const likedPages: string[] = stored ? JSON.parse(stored) : [];

  // If page is not already saved add it to localStorage
  if (likedPages.indexOf(pageTitle) === -1) {
    likedPages.push(pageTitle);
    window.localStorage.setItem("likedPages", JSON.stringify(likedPages));
  }
};
